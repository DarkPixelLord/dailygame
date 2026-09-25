# Stratégie de monétisation

**Statut : en réflexion, phase 1 pas encore en ligne.** Ce doc suit comment le
jeu génère des revenus dans le temps. La phase 1 est ce qu'on construit et
lance en premier ; les phases suivantes sont gardées ici pour ne pas perdre
les décisions, pas parce qu'elles sont planifiées.

## Principe directeur

Rétention et viralité (partages de score) passent avant le revenu. Sur
mobile, les bannières pub mangent l'espace restreint dont dépend l'UX du
jeu, donc la pub est un levier qu'on active volontairement quand le trafic le
justifie, pas un défaut.

## Phase 1 — Lancement : 0% pub, soutien optionnel

**Position produit.** Lancer le site 100% gratuit et épuré. Aucune régie
pub, aucun paywall. C'est l'état par défaut jusqu'à ce que le seuil de trafic
de la phase 2 soit atteint.

**Soutien communautaire.** Un bouton discret sur la page d'accueil (ex : "☕
Soutenir le jeu") ouvre une modale. Le discours doit être transparent sur le
fait que le projet est solo, ne pas faire de promesse à long terme, et
expliquer que le jeu est pour l'instant sans pub et que le soutien aide à
couvrir les coûts d'hébergement.

**Format : dons uniques uniquement.** Pas d'engagement récurrent/abonnement
à ce stade (type "offrir un café, 2€"). Revoir le soutien récurrent
uniquement une fois que la phase 1 aura montré un soutien volontaire
soutenu dans le temps.

**Plateforme : Ko-fi adossé à Stripe.** Ko-fi ne prend 0% de commission sur
les dons uniques (contre 5% pour Buy Me a Coffee), pas de seuil de retrait,
et verse via son compte Stripe connecté. Flux : le joueur paie par CB / Apple
Pay / Google Pay en euros sur Ko-fi → Stripe (les frais bancaires classiques
s'appliquent ici quelle que soit la plateforme) → compte bancaire.

Alternative à garder en tête : un Payment Link Stripe intégré directement
sur le site plutôt que Ko-fi. Mêmes frais Stripe sous-jacents, mais garde le
joueur sur le domaine au lieu de le rediriger vers une page tierce —
probablement une meilleure conversion/image de marque au prix d'un peu plus
de mise en place. Pas nécessaire pour une v1, mais Ko-fi ne doit pas être vu
comme la réponse définitive.

**⚠️ Point légal/fiscal à trancher avant le lancement — "don" vs
"contrepartie".** En France, une somme n'est qualifiée de *don* (avec le
traitement fiscal plus léger que ça implique) que si elle est **sans
contrepartie** — aucune fonctionnalité débloquée, aucun retrait de pub,
aucun contenu bonus, même implicite ou minime. Si le bouton de soutien donne
quoi que ce soit en retour, l'URSSAF requalifie ça en vente de service
classique : CA d'auto-entrepreneur normal, ça compte dans le plafond, mêmes
règles de déclaration que n'importe quel autre revenu. Il faut garder la
copie et le mécanisme de la phase 1 totalement sans contrepartie, ou
prévoir la compta comme du revenu de vente classique. C'est le seul point de
ce doc qui doit être tranché avant la mise en ligne du bouton, pas quelque
chose à corriger après coup.

## Phase 2 — Seuil de trafic atteint (~1 000–2 000 visiteurs uniques/jour)

Déclencheur pour introduire la pub, volontairement basé sur le trafic plutôt
que sur une date.

- Une bannière très discrète, ou un bouton "indice" en vidéo récompensée
  (regarder une pub pour débloquer un indice) — une exposition pub opt-in
  se ressent comme moins intrusive qu'une bannière sur petit écran.
- Le revenu pub réel à ce volume reste modeste ; l'enjeu est l'optionnalité,
  pas une ligne de revenu principale à ce stade.
- Coût opérationnel lié à cette phase et facile à sous-estimer : un bandeau
  de consentement RGPD/CMP devient obligatoire dès qu'un SDK pub est chargé.
  Prévoir le temps de mise en place/maintenance en plus de l'intégration pub
  elle-même.

## Phase 3 — Plus tard, options non planifiées

Non engagées, gardées ici pour ne pas être réinventées plus tard :

- Achat unique in-app (retrait de pub définitif, packs cosmétiques/thèmes)
  en complément des dons — un entre-deux entre gratuit et pub.
- Soutien récurrent/abonnement, seulement si les dons uniques de la phase 1
  montrent un appétit pour ça.
- Réévaluer Ko-fi vs Payment Link Stripe intégré une fois que le volume rend
  la différence de conversion on-domain significative.

## Flux financier (phase 1)

```
Joueur (CB / Apple Pay / Google Pay)
  -> Ko-fi (0% de commission sur les dons uniques)
  -> Stripe (frais bancaires classiques)
  -> Compte bancaire FR (IBAN)
```

## Décisions ouvertes

- [ ] Confirmer que le discours/mécanisme du bouton de soutien est sans
      aucune contrepartie, ou décider de comptabiliser les dons comme du
      revenu de vente classique.
- [ ] Trancher Ko-fi vs Payment Link Stripe intégré pour le bouton de
      soutien.
- [ ] Définir la métrique/fenêtre exacte qui déclenche le "seuil phase 2"
      (ex : moyenne glissante sur 7 jours des visiteurs uniques).
