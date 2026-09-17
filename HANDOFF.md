# Handoff — Daily game side project (ex "dailygame")

## Contexte

Après 3 mois sans traction sur la prospection B2B d'elbee (B2C viral, 42 cibles locales Bretagne, prospection cybersécurité — voir `elbee/elbee-quiz2/docs/b2b-local.md` et `docs/b2b-cyber.md`), constat que seuls les contacts personnels ont généré du signal réel. Décision : ne pas abandonner elbee, mais explorer en parallèle un jeu quotidien (type Wordle/Worldle/TimeGuessr) — plaisir de production, sans pression de vente immédiate, monétisation éventuelle plus tard.

## Recherche catégorie (comparatif trafic Similarweb, 3 derniers mois)

| Catégorie | Exemple | Visites/3 mois | Session | Rebond |
|---|---|---|---|---|
| Géographie | Worldle | 10,2M | 2min37 | 60% |
| Cinéma | Framed | 3,6M | 2min36 | 49% |
| Gaming (LoL) | LoLdle | 2,6M | 5min22 | 23% |
| Mots (FR) | Sutom | 2,1M | 1min58 | 67% |
| Géo + époque | TimeGuessr | 1,5M | 7min51 | 22% |
| Gaming (Pokémon) | Pokedle | 857K | 5min21 | 37% |

Enseignements clés :
- Le nombre de concurrents ne prédit pas le trafic.
- Les jeux de mots plafonnent ~2M (audience francophone uniquement) ; catégories visuelles/numériques touchent une audience anglophone bien plus large.
- L'engagement suit la richesse de la mécanique (manches multiples, score cumulé) plus que la catégorie.
- Catégories écartées : politique (trafic nul), musique (marché vide depuis fermeture Heardle 2023), gaming (Nintendo/Pokémon très agressif légalement, Riot interdit la monétisation des fan-projects), cinéma (zone grise copyright plus risquée en France, pas de fair use large).

**Décision retenue : géographie** — meilleur compromis trafic + sécurité juridique (contenu factuel/public : drapeaux, silhouettes, stats officielles).

## Décisions d'architecture prises dans cette conversation

1. **Pas d'IA embarquée pour ce test.** Le concept géo n'en a pas besoin : un fichier JSON statique (dataset pays) + une fonction `index = joursDepuisEpoch % liste.length` suffit à déterminer la "réponse du jour", exactement comme Worldle. Zéro coût API, zéro pipeline à surveiller.
2. **Projet 100% séparé d'elbee-quiz2** : nouveau dossier, nouveau repo git, nouveau projet Vercel. Le moteur de quiz elbee (radar, archétypes, JSON quiz — voir `elbee/elbee-quiz2/docs/engine.md`) n'a rien à voir avec la mécanique de ce jeu.
3. **Pas de nom de domaine acheté pour l'instant.** Tester d'abord sur l'URL gratuite `xxx.vercel.app`. Ne pas réutiliser `elbee.fr` pour ce jeu : mauvais TLD pour une audience anglophone, nom de marque qui ne dit rien du concept, et ça grillerait la vitrine B2B d'elbee si un prospect tombe dessus. N'investir dans un vrai domaine que si le test montre une vraie traction.
4. **Déploiement manuel** via `vercel deploy --prod` depuis le dossier du projet (cohérent avec le workflow elbee existant : pas d'auto-deploy GitHub).
5. **Distribution cible** : Listdle (listdle.com), équivalent anglophone de jeux-du-jour.fr, plus fort en trafic. Soumission via leur formulaire de contact, catégorie "Proposition de partenariat", une fois le jeu stable.

## État actuel (fait)

- Dossier créé : `C:\Users\Utilisateur\Desktop\FREELANCE\dailygame` (sibling du dossier `elbee`, pas dedans).
- Scaffold Next.js standard généré via `create-next-app` : TypeScript, Tailwind, ESLint, App Router, `src/` dir, alias `@/*`.
- Git initialisé et premier commit fait automatiquement par `create-next-app`.
- Note : le fichier `AGENTS.md` généré ("This is NOT the Next.js you know") est produit automatiquement par `next dev` dans cet environnement pour **tout** projet Next.js — ce n'est pas une consigne spécifique à elbee-quiz2, donc rien d'anormal à le voir ici aussi.
- Rien d'autre n'est codé : pas de dataset, pas de logique de jeu, pas d'UI, pas de déploiement Vercel encore fait pour ce projet.

## Prochaines étapes (à faire)

1. Construire le dataset géo statique (pays + attributs nécessaires à la mécanique de guess : drapeau, distance/direction).
2. Implémenter la logique "réponse du jour" par index de date.
3. UI minimale : input de guess, feedback par tentative, état de victoire.
4. Streak/historique en `localStorage` (pas de backend nécessaire pour ce test).
5. Tester en local (`npm run dev`).
6. Déployer (`vercel deploy --prod` depuis ce dossier — crée un nouveau projet Vercel indépendant, URL gratuite `dailygame-xxx.vercel.app`).
7. Une fois stable, soumettre l'URL à Listdle.
8. N'acheter un nom de domaine que si le test montre une vraie traction.

## Skills suggérées pour la suite

- **`run`** — pour lancer et tester l'app (`npm run dev`) et valider dans le navigateur au fur et à mesure du développement.
- **`prototype`** — utile si on veut explorer plusieurs variantes de mécanique/UI avant de figer le concept définitif.
- **`code-review`** ou **`simplify`** — une fois le squelette de jeu codé, pour une passe qualité avant le premier déploiement.
- Pas besoin de `generate-quiz` : cette skill est spécifique au moteur de quiz elbee, sans rapport avec ce projet.
