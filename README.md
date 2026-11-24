# ADISENIAR — Portfolio

Portfolio técnico de ADISENIAR: desarrollo web, aplicaciones de escritorio con Rust/Tauri,
despliegue cloud con Docker y diseño gráfico asistido por IA.

Stack: **React 19 + TypeScript + Vite 8 + Tailwind CSS v4**. No requiere servidor ni variables
de entorno: es un sitio estático con blog generado en HTML durante el build.

## Requisitos

Node.js 20.19+ y pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # typecheck + build de producción en dist/
pnpm preview      # sirve dist/ localmente
```

## Calidad

```bash
pnpm typecheck    # tsc --noEmit (strict)
pnpm lint         # ESLint
pnpm lint:fix
pnpm format       # Prettier
pnpm format:check
```

## Estructura

- `src/components/` — secciones y componentes reutilizables.
- `src/data/siteData.ts` — servicios, proyectos, testimonios y datos de contacto (única fuente de verdad).
- `src/assets/` — imágenes importadas por Vite (con hash y optimización en el build).
- `src/content/blog/` — artículos en Markdown con frontmatter YAML.
- `vite-plugins/blog-pages.ts` — genera una página HTML estática y SEO-ready por artículo.

## Agregar un artículo

Creá un archivo `.md` en `src/content/blog/` con este frontmatter:

```markdown
---
title: Título del artículo (30–60 caracteres)
description: Resumen para buscadores (120–160 caracteres).
slug: mi-articulo
date: 2026-11-24
category: Ingeniería
keywords: React, SEO, Vite
readingTime: 4 min
---

## Contenido

Escribí en Markdown: **negrita**, _cursiva_, `código`, bloques `fenced`, listas y citas.
```

El sitio genera automáticamente `/blog/<slug>/` con `<title>`, meta description, OpenGraph,
Twitter Card y JSON-LD `BlogPosting`. No hace falta tocar el código ni reiniciar en producción;
en desarrollo el plugin regenera las páginas al iniciar.

## Contacto

WhatsApp: +54 9 343 471-8183 · Email: adiseniar@gmail.com
