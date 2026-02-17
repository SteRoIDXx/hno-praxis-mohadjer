# HNO-Praxis Dr. med. Claude Mohadjer – Website

Statische Website für die HNO-Praxis Dr. med. Claude Mohadjer in Neu Wulmstorf, gebaut mit [Astro](https://astro.build/) und [Tailwind CSS](https://tailwindcss.com/).

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:4321](http://localhost:4321) im Browser.

## Build

```bash
npm run build
```

Die fertigen Dateien liegen danach im `dist/`-Ordner.

## Deployment

Die Website ist für Netlify konfiguriert (`netlify.toml`). Einfach das Repository mit Netlify verbinden – Build-Kommando und Publish-Verzeichnis werden automatisch erkannt.

## Projektstruktur

```
src/
├── components/    # Wiederverwendbare Komponenten (Navigation, Sprechzeiten, Breadcrumb, NotfallBanner, ScrollToTop)
├── layouts/       # MainLayout mit Header, Footer, Sidebars
├── pages/         # Alle Seiten (13 Stück inkl. 404)
└── styles/        # Globale CSS-Datei (Tailwind)
public/            # Statische Assets (Favicon)
```

## Technologien

- Astro 5 (Static Site Generator)
- Tailwind CSS 3
- Google Fonts (Source Sans 3)
- Schema.org JSON-LD (MedicalBusiness)
