# A.J. Stempleton

Sitio editorial de A.J. Stempleton, autor de ficción política, historia alternativa, distopías y ciencia ficción. La web reúne sus principales obras en una experiencia visual enfocada en las portadas, las ideas detrás de cada novela y el acceso a artículos publicados.

## Tecnologías

- TanStack Start y TanStack Router
- React 19 con TypeScript
- Vite 7
- Tailwind CSS 4 y CSS personalizado
- Lucide React
- Adaptador de Netlify para TanStack Start

## Estructura principal

- `src/routes/index.tsx`: página editorial, navegación y contenido.
- `src/routes/__root.tsx`: documento HTML y metadatos SEO.
- `src/styles.css`: sistema visual, animaciones y diseño adaptable.
- `public/books/`: portadas locales de las obras.
- `netlify.toml`: configuración de despliegue en Netlify.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Para trabajar con la emulación de Netlify:

```bash
netlify dev --port 8889
```

## Contenido

Las fichas de libros y artículos se mantienen en los arrays `books` y `journal` de `src/routes/index.tsx`. Las imágenes nuevas deben guardarse en `public/books/` para asegurar una carga estable y evitar dependencias externas.
