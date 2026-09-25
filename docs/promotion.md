# Stratégie de promotion

**Statut : en préparation, rien n'est encore soumis nulle part.** Ce doc suit
le pitch kit et les étapes du lancement promo (annuaires, Reddit, médias,
Product Hunt), pour ne pas avoir à tout redéfinir à chaque session.

## Pitch kit — FR

**Nom** : Laurus

**Accroche** : Devine l'endroit. Remets l'histoire dans l'ordre.

**Description courte** : Un défi quotidien gratuit, sans compte : 5 indices
énigmatiques décrivent chacun un événement réel sans jamais le nommer, à toi
de deviner où ça s'est passé sur la carte. Une fois les événements localisés,
remets-les dans l'ordre chronologique. Chaque réponse dévoile une anecdote
historique.

**3 bullets** :
- 5 indices à déchiffrer par jour, de facile à difficile
- Score sur la précision du lieu deviné ET l'ordre chronologique
- Une explication à chaque énigme, gratuit, sans compte, rejouable en mode
  archive

## Pitch kit — EN

**Name**: Laurus

**Tagline**: Guess where. Order the past.

**Short description**: A free daily challenge, no account needed: 5 cryptic
clues each describe a real event without ever naming it, guess where it
happened on the map. Once the events are located, put them back in
chronological order. Every reveal comes with a historical explanation.

**3 bullets**:
- 5 clues to crack a day, easy to hard
- Scored on both your guessed location AND the chronological order
- An explanation with every puzzle, free, no account, replayable in archive
  mode

## URL

Reste sur le domaine `.vercel.app` pour le lancement — décision volontaire :
pas de nom de domaine payant tant que le jeu n'a pas de trafic/retours
réels. Migration facile plus tard (redirection 301, peu de liens à ce stade).

## Visuels

- **Favicon** : réglé, voir [icon.tsx](../src/app/icon.tsx) (laurier ambre
  sur fond bleu nuit, cohérent avec l'OG image et le logo de la landing).
- **Screenshots** : faits, via le device toolbar Chromium/Brave (Ctrl+Shift+M
  → preset mobile → "Capture screenshot"), 469×834px. Sélection retenue :
  indice + carte vide, écran de révélation ("Excellent!"), score final (viser
  un run avec un bon score/rang, pas une run avec des erreurs visibles).
- **GIF/vidéo gameplay** : à enregistrer en vidéo (Win+G ou ShareX), pas en
  diaporama d'images fixes — l'objectif est de montrer l'interaction
  (indice → pin → révélation), pas une suite de captures statiques.
  - Résolution cible : ~800×500 px
  - Durée : 5-8 s, loop serré sur un seul cycle complet, sans temps mort
  - Fréquence : 12-15 fps
  - Poids : sous les 5-8 Mo
  - Export vidéo (MP4/WebM) en priorité ; conversion en GIF (palette
    réduite, ex. ezgif) seulement pour les plateformes qui l'exigent
    (ex. old.reddit, formulaire sans upload vidéo)

## Grandes étapes du process

1. **Pitch kit** — fait (ce doc).
2. **Visuels** — screenshots faits ; GIF/vidéo gameplay pas encore fait.
3. **Annuaires "games like Wordle"** (le meilleur ratio effort/résultat) —
   voir suivi détaillé ci-dessous.
4. **Reddit** — pas un post "venez jouer", un devlog avec le GIF
   (r/IndieDev, r/playmygame). Lire la sidebar de chaque sub avant de poster.
5. **Médias/blogs éditoriaux** (en parallèle, taux de réponse faible donc à
   lancer tôt) — mail avec le pitch kit aux auteurs de tops "games like
   Wordle" (Summer Engine, Wordga, PCGamer) et aux médias FR ayant couvert
   des Wordle-like.
6. **Product Hunt** — en dernier, une fois qu'il y a déjà un peu de
   trafic/retours à faire valoir dès la première heure du lancement.

## Suivi des annuaires (étape 3)

| Annuaire | Statut | Détail |
|---|---|---|
| Dailydle (`.org`, pas `.com`) | ✅ Soumis le 2026-09-24 | Queue éditoriale, traitement estimé ~2026-10-24 (~30 jours). Attention : `dailydle.com` est un tout autre site (jeux perso d'un autre dev), pas un annuaire — ne pas y soumettre. |
| Puzzle Index | ⏭️ Écarté pour l'instant | Aucun formulaire/contact/email trouvé sur le site ni sa page Privacy. Probablement du contenu programmatique, pas d'annuaire à soumission ouverte. À reconsidérer seulement si on retrouve un contact valide. |
| AlternativeTo | ☐ À faire | Auto-listing, pas de review — lister Laurus comme alternative à Wordle/Worldle/Globle. |
| Listdle | ✅ Soumis le 2026-09-24 | Via le formulaire `/submit` ("Suggest a Game"). |
| LikeWordle | ⚠️ Incertain | Le formulaire `/submit-app` est mort, redirige vers un réseau séparé `dle.games` ("For Creators"). Pas encore confirmé si ce dernier fonctionne réellement — à creuser plus tard, pas prioritaire. |
| Dle Hunt (`dlehunt.com`) | ✅ Soumis le 2026-09-24 | Via `/submit`. Review humaine annoncée, pas de délai précis donné (contrairement à Dailydle). |
| The Dles (`dles.aukspot.com`) | ✅ Soumis le 2026-09-24 | Via le formulaire Tally https://tally.so/r/mOKOea. 759+ jeux, changelog actif, Discord, projet géré à la main — le plus sérieux des annuaires soumis. |
| Alldle (`alldle.net`) | ⏳ Soumis, vérif domaine bloquée | Soumission faite via `/submit`, mais la vérification auto de domaine échoue en boucle malgré le meta tag `alldle-verify` bien présent en prod (confirmé via curl, GET/HEAD, plusieurs fois). Cause probable : leur checker suit `http://laurus.vercel.app` → 308 vers `https://` sans suivre la redirection. Mail à contact@alldle.net a bounced (boîte probablement inexistante, DNS/MX pourtant valides côté OVH) — à recontacter via leur Discord plutôt que par mail. |
| Daily Games Hub (`dailygameshub.com`) | ✅ Soumis le 2026-09-24 | Via "Suggest a Game". 274 jeux, 8 catégories, open-source sur GitHub — annuaire sérieux. |
| 1 Jour, 1 Jeu (`1jour1jeu.com`) | ☐ À faire | FR. Formulaire dédié "Proposer un jeu" à `/proposer`, mais compte gratuit requis pour y accéder (anti-spam). Forum + blog actifs. |
| Jeux-du-Jour.fr | ☐ En secours | FR. Pas de formulaire dédié, juste un contact générique `/contact`. À tenter seulement si `1jour1jeu.com` ne suffit pas. |

## Décisions ouvertes

- [ ] Enregistrer et monter le GIF/vidéo gameplay.
- [ ] Lister Laurus sur AlternativeTo (prochaine étape).
- [ ] Vérifier le statut de la soumission Dailydle autour du 2026-10-24.
- [ ] Décider du moment pour acheter un nom de domaine (déclencheur : trafic
      réel, pas une date).
