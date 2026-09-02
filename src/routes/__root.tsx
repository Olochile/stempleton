import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'A.J. Stempleton — Novelas que cuestionan el mundo' },
      {
        name: 'description',
        content: 'Sitio oficial de A.J. Stempleton. Ficción política, historia alternativa, distopías y ciencia ficción en español y portugués.',
      },
      { property: 'og:title', content: 'A.J. Stempleton — Ficción que incomoda' },
      { property: 'og:description', content: 'Novelas sobre poder, tecnología y futuros posibles.' },
      { property: 'og:image', content: '/books/ocho-mil-millones.jpg' },
      { name: 'theme-color', content: '#171713' },
    ],
    links: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
