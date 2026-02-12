# Hellomember.gg Landing Page

Landing page MVP pour Hellomember.gg - Plateforme universelle de CommunityOps.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **React 18**

## Développement local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Déploiement sur Vercel

1. Connecte le repo GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le déploiement se fera automatiquement à chaque push sur `main`

### Configuration Vercel

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (défaut)
- **Output Directory**: `.next` (défaut)
- **Install Command**: `npm install` (défaut)

## Structure

```
app/
  ├── layout.tsx      # Layout racine
  ├── page.tsx        # Page d'accueil (landing)
  ├── globals.css     # Styles globaux
  └── api/
      └── early-access/
          └── route.ts # API pour capturer les emails
public/
  └── logos/          # Logos SVG des outils compatibles
```

## Documentation

Voir [SPEC_LANDING_HELLOMEMBER.md](./SPEC_LANDING_HELLOMEMBER.md) pour la spécification complète de la landing page.
