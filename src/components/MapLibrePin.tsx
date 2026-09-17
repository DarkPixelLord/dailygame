"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";
import {
  Map as MaplibreMap,
  Marker,
  NavigationControl,
  setWorkerUrl,
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

// Layer ids to drop from the default style: POI icons, transit icons,
// building footprints, route shields, and the low-res world-scale shaded
// relief raster (blurry when zoomed in, only meant for zoom <= 7).
// Everything else (water, land cover, roads, city/country labels) stays.
const HIDDEN_LAYER_PATTERNS = [/^poi_/, /^building/, /^airport$/, /shield/i, /^natural_earth$/];

function shouldHide(layerId: string): boolean {
  return HIDDEN_LAYER_PATTERNS.some((pattern) => pattern.test(layerId));
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

      style.layers = style.layers.filter((layer) => !shouldHide(layer.id)).map(forceEnglishLabels);

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
          paint: { "line-color": "#ff3b5c", "line-width": 2, "line-dasharray": [2, 2] },
        });
      }

      const interactionHandlers = [
        map!.scrollZoom,
        map!.dragPan,
        map!.doubleClickZoom,
        map!.boxZoom,
        map!.touchZoomRotate,
        map!.keyboard,
      ];

      if (disabled) {
        interactionHandlers.forEach((h) => h.disable());
        if (pins.length >= 2) {
          const lngs = pins.map((p) => p.lng);
          const lats = pins.map((p) => p.lat);
          const bounds: LngLatBoundsLike = [
            [Math.min(...lngs), Math.min(...lats)],
            [Math.max(...lngs), Math.max(...lats)],
          ];
          map!.fitBounds(bounds, { padding: 60, maxZoom: 10, duration: 800 });
        }
      } else {
        interactionHandlers.forEach((h) => h.enable());
        if (pins.length === 0) {
          map!.flyTo({ center: INITIAL_CENTER, zoom: INITIAL_ZOOM, duration: 800 });
        }
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
        className={`relative w-full flex-1 overflow-hidden rounded-md border-2 border-amber-400/30 shadow-lg shadow-black/30 ${
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
      {!disabled && <p className="mt-1 shrink-0 text-center text-xs text-white/40">{t.scrollToZoomHint}</p>}
    </div>
  );
}
