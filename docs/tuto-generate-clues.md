# Tuto : générer de nouvelles clues

Ce doc explique comment utiliser `/generate-clues`, le skill qui automatise
la rédaction de nouveaux events (le détail technique du pipeline est dans
`.claude/skills/generate-clues/SKILL.md` ; les règles de rédaction elles-
mêmes restent dans `docs/event-writing-guide-v2.md`, ce tuto ne les
duplique pas).

## Comment l'utiliser

Dans une fenêtre Claude Code ouverte sur ce projet :

```
/generate-clues 10
```

Génère 10 nouvelles entrées, réparties automatiquement entre easy/medium/hard
selon ce qui manque dans le pool (voir `docs/pool-stats.md`).

Sans argument, `/generate-clues` en fait 5 par défaut.

Pour forcer une seule difficulté :

```
/generate-clues 6 easy
```

Pas de plafond codé en dur — mais au-delà d'une vingtaine d'un coup, la
relecture à l'aveugle (étape 6) devient moins fiable et ça coûte
proportionnellement plus de tokens. Préférer plusieurs lots raisonnables à
un seul énorme.

## Ce qui se passe derrière, dans l'ordre

1. **Vérifie l'équilibre du pool** (`npm run stats:pool`) pour savoir quelle
   difficulté prioriser.
2. **Vérifie le réservoir de candidates** (`data/candidates-*.json`) — s'il
   commence à manquer pour la difficulté visée, relance automatiquement
   `fetch-candidates.mjs` (zéro token, requête Wikidata directe) pour le
   regarnir.
3. **Planifie le lot** à rédiger, en respectant la diversité (pas trop du
   même conflit/ville/subcategory dans un lot).
4. **Rédige le lot en anglais**, dans un fichier brouillon — jamais
   directement dans le pool vivant.
5. **Vérifie mécaniquement** (longueur, tirets, dates, vocabulaire interdit)
   avant d'aller plus loin.
6. **Fait relire à l'aveugle par un sous-agent séparé**, qui ne voit que le
   texte des clues (pas les réponses, pas d'accès web) et doit deviner
   chaque lieu/identité. Ce sous-agent doit être neuf — jamais celui qui a
   écrit les clues, sinon le test ne vaut rien (même logique que le
   protocole de calibration de difficulté).
7. **Corrige ce qui coince**, de façon ciblée, pas tout le lot.
8. **Traduit en français**, fusionne les deux langues dans les vrais
   fichiers (`poc-events.ts` / `poc-events-fr.ts`), relance le vrai lint.
9. **Fait un rapport** (combien ajouté, nouvel écart par rapport à la cible)
   et **s'arrête là**.

## Ce que le skill ne fait jamais tout seul

- Il ne touche jamais `data/daily-packs-plan.json` ni ne relance
  `build-final-daily-packs.mjs` — regénérer le plan de packs reste une
  étape à part, qu'on valide à la main (aperçu avant d'écraser le fichier
  vivant), pour ne jamais risquer les jours déjà servis aux joueurs.
- Il ne commit rien — la fusion se fait dans le working tree, à toi de
  relire le diff et de commiter quand tu es satisfait.

## Après un lot

Une fois le rapport reçu :

1. Relire le diff (`git diff src/lib/poc-events.ts src/lib/poc-events-fr.ts`)
   pour un dernier coup d'œil humain.
2. Si tu veux que ces nouvelles entrées apparaissent dans les jours à venir,
   relancer manuellement le regen des packs (aperçu d'abord, comme
   d'habitude) — ce n'est **pas** automatique.
3. Committer quand c'est bon.
