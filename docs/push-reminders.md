# Rappel quotidien (notifications push) et installation sur l'écran d'accueil

But : faire revenir les joueurs le lendemain sans appli native. Le site est
installable (PWA) et peut envoyer une notification « Le défi du jour est en
ligne » chaque matin aux joueurs qui l'ont demandé.

## Fonctionnement

- `src/app/manifest.ts` + `src/app/apple-icon.tsx` + `src/app/app-icon/[size]` :
  rendent le site installable, avec l'icône laurier.
- `src/components/ReminderPrompt.tsx`, sous les boutons de fin de partie (défi
  du jour) et sur l'écran « déjà joué » :
  - Android / ordinateur / appli installée sur iOS : bouton « Me prévenir du
    défi chaque jour ». La permission n'est demandée qu'au clic.
  - Safari iOS (non installé) : consigne « Partager puis Sur l'écran
    d'accueil », car Apple réserve le push aux sites installés.
  - Déjà abonné : « Rappel quotidien activé · Désactiver ».
  - Pas de croix : l'offre reste toujours affichée, discrète, même après un
    refus. Le navigateur ne redemande jamais : au clic, on explique comment
    réautoriser dans les réglages du site.
  - Échec (ex. notifications du navigateur coupées dans Android) : message
    rouge avec la cause, au lieu d'un bouton qui ne fait rien.
- `public/sw.js` : service worker, affiche la notification et ouvre la page
  d'accueil au clic (recharge un onglet déjà ouvert). Aucun cache, pas de mode hors-ligne.
- `api/push` : POST enregistre l'abonnement et supprime les autres abonnements
  du même appareil (`device_id`), pour une seule notification par appareil
  (ex. Chrome + appli installée depuis Chrome). Seuls les domaines des services
  push des navigateurs sont acceptés. DELETE le supprime.
- `api/cron/daily-reminder` : appelé par Vercel Cron (`vercel.json`, 07:00 UTC,
  soit 9 h à Paris en été, 8 h en hiver ; sur le plan gratuit l'heure exacte
  peut glisser dans l'heure). Envoie à tous les abonnés dans leur langue, et
  supprime les abonnements morts (404/410 : permission retirée, appli
  désinstallée).

Attention iOS : l'appli installée a son propre stockage, séparé de Safari.
Un joueur qui installe repart à 0 (série, XP) et compte comme nouvel appareil
sur le dashboard.

## Variables d'environnement

- `NEXT_PUBLIC_VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY` : paire de clés VAPID
  (`npx web-push generate-vapid-keys`). Ne jamais régénérer en production :
  tous les abonnements existants deviendraient invalides.
- `CRON_SECRET` : chaîne aléatoire ; Vercel l'envoie au cron, la route refuse
  tout appel sans elle.

## Schéma (SQL Editor Supabase)

Depuis le 2026-10-30, toute nouvelle table exige un `grant` explicite pour
`service_role` (voir `src/lib/supabase.ts`).

```sql
create table public.push_subscriptions (
  endpoint text primary key,
  p256dh text not null,
  auth text not null,
  lang text not null default 'en',
  device_id text,
  created_at timestamptz not null default now()
);
alter table public.push_subscriptions enable row level security;
grant select, insert, update, delete on public.push_subscriptions to service_role;
```

## Requête utile

```sql
select lang, count(*) from public.push_subscriptions group by lang;
```

## Tester l'envoi à la main

```bash
curl -H "Authorization: Bearer $CRON_SECRET" https://laurus.vercel.app/api/cron/daily-reminder
```

## Barre du haut de la landing (`LandingHeader.tsx`)

Cloche (rappel : activer, désactiver, consigne iOS) et 📲 (installer) à
gauche, badge série / parcours à droite. Le 📲 utilise l'invite d'installation
native sur Android (Chrome, Edge), la consigne « Partager » sur iOS, et
disparaît quand le jeu est déjà installé.

Samsung Internet : son installation est bloquée par Google Play Protect
(« Appli non sécurisée bloquée », l'appli générée par Samsung vise une vieille
version d'Android). On ne la déclenche jamais : le 📲 explique et propose
« Ouvrir dans Chrome » (lien intent Android), en prévenant que la série reste
dans Samsung Internet (stockage séparé).

Brave : son service push Google est désactivé par défaut (erreur « push
service error »). Détecté via `navigator.brave` : on affiche la consigne
« Utiliser les services de Google de messagerie push » au lieu de l'erreur.
