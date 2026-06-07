# Abraham Markus — Portfolio

Editorial single-page portfolio inspired by ozgur.design. Built with React 18, Framer Motion, Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Photo

Place your headshot at `public/abraham.jpeg`. The Hero will automatically pick it up. Any 500×500px or larger JPG/PNG works — it's served directly from the `public/` folder at `/abraham.jpeg`.

## Stack

| Tool | Role |
|------|------|
| React 18 | UI components |
| Framer Motion 11 | All animations |
| Tailwind CSS 3 | Utility styling |
| React Router 6 | App shell / hash-scroll routing |
| Vite 5 | Dev server & bundler |

## Features

- Custom spring-physics cursor (desktop only, ring mode on hover)
- Vertical scroll progress bar (far right edge)
- Page-load stagger sequence: nav → label → headline words → metadata → photo
- Scroll-triggered section reveals (whileInView, once)
- Char-by-char section number animations
- Count-up stats with Framer Motion `animate()`
- Row hover with title nudge + arrow slide-in
- Mobile full-screen overlay nav with staggered entrance
- Zero colors — strict black (#0A0A0A) & white (#FFFFFF) system

## Build

```bash
npm run build
npm run preview
```

Output in `dist/`.
