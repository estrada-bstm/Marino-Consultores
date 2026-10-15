import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer'
import { Header, Footer, FloatWa } from './components'

const BASE = 'https://marinoconsultores.com'

export const renderer = jsxRenderer(({ children, title, description }: any) => {
  const c = useRequestContext()
  const path = new URL(c.req.url).pathname.replace(/\/$/, '') || '/'
  const t = title ? `${title} | Marino Consultores` : 'Marino Consultores | Distribuidor Integral Certificado Siigo Aspel'
  const d =
    description ||
    'Distribuidor Integral Certificado Siigo Aspel en Morelos. Software administrativo, contable, nómina y facturación CFDI 4.0, soporte técnico, capacitación y equipo de cómputo.'
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Marino Consultores',
    description: d,
    url: BASE,
    telephone: '+527772029573',
    image: `${BASE}/static/img/marino-logo.png`,
    sameAs: [
      'https://www.facebook.com/marinoconsultores',
      'https://www.instagram.com/marinoconsultores/',
      'https://x.com/marinoconsultor',
    ],
  }
  return (
    <html lang="es-MX">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{t}</title>
        <meta name="description" content={d} />
        <meta name="theme-color" content="#0b3a8c" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t} />
        <meta property="og:description" content={d} />
        <meta property="og:image" content={`${BASE}/static/img/marino-logo.png`} />
        <meta property="og:locale" content="es_MX" />
        <link rel="icon" type="image/png" href="/static/img/favicon.png" />
        <link rel="apple-touch-icon" href="/static/img/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </head>
      <body>
        <a href="#main" class="skip">Saltar al contenido</a>
        <Header path={path} />
        <main id="main">{children}</main>
        <Footer />
        <FloatWa />
        <script src="/static/app.js" defer></script>
      </body>
    </html>
  )
})
