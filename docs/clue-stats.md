# Clue stats (difficulté réelle par énigme)

But : repérer des **patterns** qui révèlent des failles dans la génération des
indices (niveau, type d'épingle, catégorie, époque, région, langue), pas
corriger les énigmes une par une : une énigme quotidienne n'est servie qu'une
fois, la réécrire n'aide que l'archive.

## Fonctionnement

- `api/guess` appelle la RPC `record_clue_guess` après la réponse (`after()`),
  donc ni lenteur ni échec visible pour le joueur.
- Une ligne par (énigme, langue) dans `clue_stats` : `attempts`, `points_sum`,
  `misses` (moins de `MISS_RATIO` = 10 % des points, soit la mauvaise région).
  Volume plafonné (~1 300 lignes max) quel que soit le trafic : choix fait pour
  rester sur le plan gratuit Supabase.
- Première tentative seulement : le navigateur mémorise les énigmes déjà
  comptées (`src/lib/counted-guesses.ts`, clé `dailygame:counted-guesses`).
  Les dev previews (`next dev`) n'envoient rien.
- Dashboard, onglet **Énigmes** (`src/app/dashboard/CluesTab.tsx`) : moyennes
  par groupe (≥ 20 tentatives), écart à la moyenne, filtre par niveau, et les
  10 pires énigmes en exemples repliés.
- Les clics au hasard de joueurs désintéressés sont gardés volontairement :
  c'est du vrai comportement, dilué par les regroupements.

Historique : une première version stockait une ligne par réponse (table
`guesses`, 2026-10-02) ; migrée dans `clue_stats` puis supprimée le jour même.

## Schéma (à recréer si besoin dans le SQL Editor Supabase)

Depuis le 2026-10-30, toute nouvelle table/fonction exige un `grant` explicite
pour `service_role` (voir `src/lib/supabase.ts`).

```sql
create table public.clue_stats (
  event_id text not null,
  lang text not null,
  attempts integer not null default 0,
  points_sum bigint not null default 0,
  misses integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (event_id, lang)
);
alter table public.clue_stats enable row level security;
grant select, insert, update, delete on public.clue_stats to service_role;

create or replace function public.record_clue_guess(p_event_id text, p_lang text, p_points integer, p_miss boolean)
returns void language sql set search_path = '' as $$
  insert into public.clue_stats (event_id, lang, attempts, points_sum, misses)
  values (p_event_id, p_lang, 1, p_points, case when p_miss then 1 else 0 end)
  on conflict (event_id, lang) do update set
    attempts = public.clue_stats.attempts + 1,
    points_sum = public.clue_stats.points_sum + excluded.points_sum,
    misses = public.clue_stats.misses + excluded.misses,
    updated_at = now();
$$;
revoke execute on function public.record_clue_guess(text, text, integer, boolean) from public, anon, authenticated;
grant execute on function public.record_clue_guess(text, text, integer, boolean) to service_role;
```

## Requête utile (hors dashboard)

```sql
select event_id, lang, attempts,
       round(points_sum::numeric / attempts) as pts_moyens,
       round(100.0 * misses / attempts) as pct_rates
from public.clue_stats
where attempts >= 5
order by pts_moyens;
```
