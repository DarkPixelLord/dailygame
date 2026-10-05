# Retours joueurs : axes d'amélioration

Thèmes récurrents dans les retours joueurs, et ce qu'ils impliquent pour le
jeu. Statut : `à traiter`, `en cours`, `fait`, `écarté` (avec la raison).

## 1. Personnalités : le lieu visé et la date sont flous

**Statut : en cours.** Thème le plus fréquent au lancement sur r/Histoire.

- Le lieu de naissance déçoit : les joueurs visent le lieu emblématique
  (Spielberg → Hollywood, pas Cincinnati).
- L'indice se lit comme « qui est-ce ? ». Les joueurs ne comprennent pas tout
  de suite qu'on cherche un lieu, et reformuler ne suffit pas : l'indice dit
  déjà « Né à… ».
- Au classement final, on ne sait pas quelle date représente la personnalité.

**Axe :** viser un lieu emblématique et réécrire l'indice pour que le lieu et
la date soient explicites. Piste sans tokens : Wikidata P937 (lieu de
travail), P551 (résidence) puis P20 (lieu de décès), avant de retomber sur la
naissance.

## 2. Revenir chaque jour sans friction

**Statut : à traiter.**

- Des joueurs demandent une appli et un rappel quotidien.
- Choix retenu : rester un simple lien, sans store ni compte.

**Axe :** rendre le site installable (manifest, icônes, plein écran), puis
envisager des notifications push via PWA. Le site n'a aujourd'hui ni manifest
ni apple-icon.

## 3. Doser la difficulté pour plusieurs publics

**Statut : à traiter.**

- Le public qui revient chaque jour sera surtout passionné, mais des débutants
  aimeraient une porte d'entrée.
- Le défi du jour doit rester le même pour tous (comparaison des scores).

**Axes :**
- Calibrer les énigmes avec les stats par énigme (**fait** : `clue_stats`).
- Garder le défi du jour unique. Les niveaux ou les thèmes (ex. cinéma) iraient
  plutôt dans un mode à côté.
- Mode expert possible : pénaliser le zoom/l'exploration de la carte (chercher
  un lieu sur la carte remplace le savoir). À garder hors du défi du jour.

## 4. Lisibilité de la carte

**Statut : à traiter.**

- Le fond actuel (OpenFreeMap « liberty ») paraît trop neutre : sans relief ni
  végétation, on se repère mal.
- Sur PC, la carte est trop petite : le texte garde une largeur de lecture et
  laisse la moitié de l'écran vide, et zoomer la page écrase la carte en
  hauteur.

**Axes :**
- Ajouter un ombrage de relief (hillshade) et une couverture du sol plus
  marquée, sans réintroduire de noms qui donnent la réponse.
- Sur grand écran, mise en page en deux colonnes (indice à gauche, carte sur le
  reste de la largeur et toute la hauteur).

## 5. Barème du classement final

**Statut : fait** (2026-10-02) : vert = place exacte (300), orange = à une
place près (150), rouge = plus loin (0), avec une flèche ▲/▼ sous la date
indiquant où la carte devait aller (`orderOffsets`/`orderPoints` dans
`src/lib/scoring.ts`). Compter seulement les cartes dans l'ordre relatif
était trop généreux (un événement décalé de deux places valait 1200).

- Le score compte les positions exactes (`ChronologicalOrder.tsx`). Un seul
  événement mal placé en tête décale tous les autres : 0 point alors que l'ordre
  relatif est presque juste.

**Axe :** noter l'ordre relatif plutôt que la position absolue, par exemple
la part de paires bien ordonnées (10 paires pour 5 événements) ou la plus
longue sous-suite déjà dans l'ordre.

## 6. Suivre ses parties en archive

**Statut : fait** (2026-10-02).

- Des joueurs enchaînent toutes les archives d'un coup et ne savent plus
  lesquelles ils ont déjà faites (comme sur Pédantix/Sémantix).

**Fait :** dans la liste des archives, chaque jour joué affiche ✓ et le score :
le score du jour même s'il a été joué en direct, sinon le meilleur score en
archive (`getPastResult` dans `src/lib/daily-result.ts`, stockage local
seulement, donc par navigateur).

## 7. Clarté des indices et exactitude des faits

**Statut : en cours.**

- Une tournure trop recherchée ou bancale fait buter le joueur sur le sens de
  la phrase plutôt que sur l'énigme, et donne une impression d'injustice.
  Mieux vaut une formulation simple et standardisée qu'une phrase détournée.
- Les joueurs passionnés relèvent les erreurs historiques (attribution d'une
  découverte, rôle d'une personne) : une erreur factuelle coûte en crédibilité.

**Axes :**
- Piste à étudier : un format plus régulier, par exemple une suite de
  définitions courtes façon mots fléchés, ou tout à la première personne.
- Vérifier les attributions dans les explications (qui a fait quoi, où), pas
  seulement le lieu et la date.
