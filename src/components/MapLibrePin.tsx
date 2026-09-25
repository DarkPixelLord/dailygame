"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";
import {
  Map as MaplibreMap,
  Marker,
  NavigationControl,
  setWorkerUrl,
  type ExpressionSpecification,
  type GeoJSONSource,
  type LngLatBoundsLike,
  type MapMouseEvent,
  type StyleSpecification,
} from "maplibre-gl";
import { useLanguage } from "./LanguageProvider";

// Turbopack doesn't resolve maplibre-gl's auto-detected worker path correctly,
// so it's served as a static file and pointed to explicitly.
setWorkerUrl("/maplibre-gl-worker.mjs");

const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
const INITIAL_CENTER: [number, number] = [10, 20];
const INITIAL_ZOOM = 1;
const LINE_SOURCE_ID = "guess-answer-line";
const LINE_LAYER_ID = "guess-answer-line-layer";
// emerald-700 — darker than the answer pin's emerald-400 so the dashed
// line stays legible against the light terre/eau map fill, where the
// lighter pin green nearly disappears.
const LINE_COLOR = "#047857";

const LAND_COLOR = "#fbde90";
const SEA_COLOR = "#7caacf";
const ROAD_COLOR = "#fbf1d6";
const BOUNDARY_COLOR = "#8a6a2f"; // mid brown, readable on the pale land fill
// Dark, saturated blue (darker than the upstream style's default #74aee9 /
// #495e91) so a water name reads unambiguously as water, not as another
// place label, on both the tan land fill and the lighter sea fill. Shared by
// rivers, lakes, seas and oceans for one consistent "this text = a body of
// water" visual language.
const WATER_LABEL_COLOR = "#0b4f8a";
// Upstream default is 10 (street-level) — far past what a player reaches
// while exploring a guess. The underlying tile data starts at zoom 3
// (checked against the vector source's TileJSON); 4 surfaces major/
// well-known rivers within a realistic guessing zoom range.
const RIVER_LABEL_MINZOOM = 4;
// Line-placed text needs enough on-screen pixel length along the geometry
// to fit — at the zoom where a river/lake first becomes visible, that
// length usually isn't there yet, so the label only appears much later
// once zoomed in far past where the shape itself is already visible
// (confirmed by screenshot: shape visible, name not, until several zoom
// steps later). Point placement anchors the label at one spot on the
// geometry instead, so it can appear as soon as the feature is in view and
// past its minzoom, independent of how much of it fits on screen.
const WATER_LABEL_PLACEMENT = "point";
// OpenMapTiles' `name_en`/`name:en` fields are sometimes dropped from a
// feature's attributes at lower zoom (tile-size optimization), which made
// the Nile render in Arabic (its raw `name`) instead of English at the zoom
// where it first appeared — coalesce through both English variants before
// falling back to the local-script `name`.
const ENGLISH_WATER_NAME_FIELD: ExpressionSpecification = ["coalesce", ["get", "name_en"], ["get", "name:en"], ["get", "name"]];

// A small dot with expanding, fading rings — a "sonar ping" around the answer pin.
function createPulseMarkerElement(color: string): HTMLDivElement {
  const el = document.createElement("div");
  el.className = "relative flex h-4 w-4 items-center justify-center";

  for (const delay of ["0s", "0.6s"]) {
    const ring = document.createElement("span");
    ring.className = "absolute h-4 w-4 animate-ping rounded-full opacity-60";
    ring.style.backgroundColor = color;
    ring.style.animationDelay = delay;
    el.appendChild(ring);
  }

  const dot = document.createElement("span");
  dot.className = "relative h-4 w-4 rounded-full border-2 border-white";
  dot.style.backgroundColor = color;
  el.appendChild(dot);

  return el;
}

// Keeps flat roads and place labels; hides everything that clutters the
// base map for a guessing game: POI/transit icons, buildings, airports, the
// low-res world-scale shaded relief raster, all land texture/use fills
// (forest, grass, parks, residential...), waterway LINE geometry, airport
// runways, tunnel/bridge duplicates, road casings + rail lines + one-way
// arrows + street name/shield labels, and the finer administrative borders.
// Only country-level land, sea, roads and city/country labels stay — plus
// water NAME labels (rivers, lakes, seas, oceans: waterway_line_label,
// water_name_point_label, water_name_line_label), kept deliberately: they're
// a real, on-map-discoverable clue tool for "easy" difficulty entries (see
// "Writing to a target difficulty" in docs/event-writing-guide-v2.md) — only
// the LINE geometry that draws rivers as strokes stays hidden, since the
// water body is already visible via the `water` fill layer and only the
// text label is wanted here.
const HIDDEN_LAYER_PATTERNS = [
  /^poi_/,
  /^airport$/,
  /shield/i,
  /^natural_earth$/,
  /^landcover/,
  /^landuse/,
  /^park/,
  /^waterway_(tunnel|river|other)$/,
  /^aeroway/,
  /^tunnel_/,
  /^bridge_/,
  /^highway-name/,
  /^road_one_way_arrow/,
  /_casing$/,
  /^road_(major_rail|major_rail_hatching|transit_rail|transit_rail_hatching)$/,
  /^road_area_pattern$/,
  /^building/,
  /^boundary_3$/,
  /^boundary_disputed$/,
];

function shouldHide(layerId: string): boolean {
  return HIDDEN_LAYER_PATTERNS.some((pattern) => pattern.test(layerId));
}

function recolor(layer: StyleSpecification["layers"][number]): StyleSpecification["layers"][number] {
  if (layer.id === "background" && layer.type === "background") {
    return { ...layer, paint: { ...layer.paint, "background-color": LAND_COLOR } };
  }
  if (layer.id === "water" && layer.type === "fill") {
    return { ...layer, paint: { ...layer.paint, "fill-color": SEA_COLOR } };
  }
  if (layer.id === "boundary_2" && layer.type === "line") {
    return { ...layer, paint: { ...layer.paint, "line-color": BOUNDARY_COLOR } };
  }
  if (layer.id.startsWith("road_") && layer.type === "line") {
    return { ...layer, paint: { ...layer.paint, "line-color": ROAD_COLOR } };
  }
  if (layer.id === "waterway_line_label" && layer.type === "symbol") {
    return {
      ...layer,
      minzoom: RIVER_LABEL_MINZOOM,
      layout: { ...layer.layout, "symbol-placement": WATER_LABEL_PLACEMENT, "text-field": ENGLISH_WATER_NAME_FIELD },
      paint: { ...layer.paint, "text-color": WATER_LABEL_COLOR },
    };
  }
  if ((layer.id === "water_name_point_label" || layer.id === "water_name_line_label") && layer.type === "symbol") {
    return {
      ...layer,
      layout: { ...layer.layout, "symbol-placement": WATER_LABEL_PLACEMENT, "text-field": ENGLISH_WATER_NAME_FIELD },
      paint: { ...layer.paint, "text-color": WATER_LABEL_COLOR },
    };
  }
  return layer;
}

// Label layers use `["case", ["has","name:nonlatin"], concat(latin, "\n", nonlatin), englishFallback]`
// to show both scripts. Keep only the English/latin fallback branch.
function forceEnglishLabels<T extends { layout?: Record<string, unknown> }>(layer: T): T {
  const field = layer.layout?.["text-field"];
  if (Array.isArray(field) && field[0] === "case") {
    return { ...layer, layout: { ...layer.layout, "text-field": field[field.length - 1] } };
  }
  return layer;
}

// Briefly disables the handlers that can steal/cancel an in-flight camera
// animation (a touch drag or pinch calls map._stop() the instant it starts,
// which on mobile reliably clobbered the fitBounds-in / flyTo-out transition
// between rounds — MapLibre has no other way to make a programmatic camera
// move immune to user interaction). Re-enabled on `moveend` so players can
// still freely pan/zoom once the transition settles — only the ~800ms
// animation itself is protected, not the whole reviewing phase.
function runProtectedCameraMove(map: MaplibreMap, animate: () => void) {
  const handlers = [map.scrollZoom, map.dragPan, map.doubleClickZoom, map.boxZoom, map.touchZoomRotate, map.keyboard];
  handlers.forEach((h) => h.disable());
  map.once("moveend", () => {
    handlers.forEach((h) => h.enable());
  });
  animate();
}

export type LatLng = { lat: number; lng: number };

type Pin = LatLng & { color: string; label: string };

type Props = {
  onGuess: (latLng: LatLng) => void;
  pins?: Pin[];
  disabled?: boolean;
};

export default function MapLibrePin({ onGuess, pins = [], disabled }: Props) {
  const { t } = useLanguage();
  const [attribOpen, setAttribOpen] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);
  const [mapReady, setMapReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const onGuessRef = useRef(onGuess);
  const disabledRef = useRef(disabled);

  useEffect(() => {
    onGuessRef.current = onGuess;
    disabledRef.current = disabled;
  }, [onGuess, disabled]);

  useEffect(() => {
    let cancelled = false;
    setMapReady(false);

    async function init() {
      if (!containerRef.current) return;
      const res = await fetch(STYLE_URL);
      if (!res.ok) throw new Error(`Style fetch failed: HTTP ${res.status}`);
      const style = (await res.json()) as StyleSpecification;
      if (cancelled || !containerRef.current) return;

      style.layers = style.layers.filter((layer) => !shouldHide(layer.id)).map(forceEnglishLabels).map(recolor);

      const map = new MaplibreMap({
        container: containerRef.current,
        style,
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM,
        attributionControl: false,
      });
      map.addControl(new NavigationControl({ showCompass: false }), "top-left");
      map.on("error", (e) => console.error("MapLibre error:", e.error));
      map.on("load", () => map.resize());
      map.on("click", (e: MapMouseEvent) => {
        if (disabledRef.current) return;
        onGuessRef.current({ lat: e.lngLat.lat, lng: e.lngLat.lng });
      });
      mapRef.current = map;
      setMapReady(true);

      // The grid layout can still be settling (e.g. the Wikipedia image
      // loading in) after the map mounts — keep the canvas in sync with
      // its container's real size/position instead of the stale one
      // captured at construction time.
      const resizeObserver = new ResizeObserver(() => map.resize());
      resizeObserver.observe(containerRef.current);
      resizeObserverRef.current = resizeObserver;
    }

    init().catch((err: unknown) => {
      if (cancelled) return;
      console.error("MapLibre init failed:", err);
      setLoadError(err instanceof Error ? err.message : "unknown error");
    });

    return () => {
      cancelled = true;
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      mapRef.current?.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, [retryKey]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    function syncMarkersAndInteraction() {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = pins.map((pin) => {
        const marker =
          pin.label === "answer" ? new Marker({ element: createPulseMarkerElement(pin.color) }) : new Marker({ color: pin.color });
        return marker.setLngLat([pin.lng, pin.lat]).addTo(map!);
      });

      const lineData: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features:
          pins.length >= 2
            ? [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "LineString",
                    coordinates: pins.slice(0, 2).map((p) => [p.lng, p.lat]),
                  },
                },
              ]
            : [],
      };
      const lineSource = map!.getSource(LINE_SOURCE_ID) as GeoJSONSource | undefined;
      if (lineSource) {
        lineSource.setData(lineData);
      } else {
        map!.addSource(LINE_SOURCE_ID, { type: "geojson", data: lineData });
        map!.addLayer({
          id: LINE_LAYER_ID,
          type: "line",
          source: LINE_SOURCE_ID,
          paint: { "line-color": LINE_COLOR, "line-width": 2, "line-dasharray": [2, 2] },
        });
      }

      if (disabled) {
        if (pins.length >= 2) {
          const lngs = pins.map((p) => p.lng);
          const lats = pins.map((p) => p.lat);
          const bounds: LngLatBoundsLike = [
            [Math.min(...lngs), Math.min(...lats)],
            [Math.max(...lngs), Math.max(...lats)],
          ];
          // DIAGNOSTIC: duration 0 (was 800) — testing whether the animated
          // camera transition itself is what's crashing the tab on some
          // mobile browsers (reported on Chrome Android and an iPhone 12,
          // not reproducible on PC or Samsung Internet). Revert to 800 once
          // confirmed either way.
          runProtectedCameraMove(map!, () => map!.fitBounds(bounds, { padding: 60, maxZoom: 10, duration: 0 }));
        }
      } else if (pins.length === 0) {
        runProtectedCameraMove(map!, () => map!.flyTo({ center: INITIAL_CENTER, zoom: INITIAL_ZOOM, duration: 0 }));
      }
    }

    if (map.isStyleLoaded()) {
      syncMarkersAndInteraction();
    } else {
      map.once("load", syncMarkersAndInteraction);
    }
  }, [pins, disabled, mapReady]);

  return (
    <div className="flex h-full w-full flex-col">
      <div
        ref={containerRef}
        className={`relative w-full flex-1 overflow-hidden rounded-md border-2 border-white/10 shadow-lg shadow-black/30 ${
          disabled ? "" : "cursor-crosshair"
        }`}
      >
        {loadError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-slate-900 p-4 text-center">
            <p className="text-sm text-white/60">
              {t.couldntLoadMap} {loadError}
            </p>
            <button
              type="button"
              onClick={() => {
                setLoadError(null);
                setRetryKey((k) => k + 1);
              }}
              className="rounded-md border-b-4 border-amber-700 bg-amber-400 px-4 py-2 text-sm font-extrabold uppercase text-slate-900 transition hover:bg-amber-300 active:translate-y-1 active:border-b-0"
            >
              {t.retry}
            </button>
          </div>
        )}
        <div className="pointer-events-none absolute bottom-1 right-1 z-10 flex items-end gap-1">
          {attribOpen && (
            <span className="pointer-events-auto rounded bg-slate-900/90 px-1.5 py-0.5 text-[10px] text-white/70 shadow">
              {t.mapAttribution}
            </span>
          )}
          <button
            type="button"
            onClick={() => setAttribOpen((v) => !v)}
            className="pointer-events-auto flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/90 text-xs font-serif italic text-white/70 shadow hover:bg-slate-900"
            aria-label={t.mapAttributionLabel}
          >
            i
          </button>
        </div>
      </div>
    </div>
  );
}
