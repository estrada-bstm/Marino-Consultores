import { Hono } from 'hono'
import { renderer } from './renderer'
import { Home, Productos, Servicios, Nosotros, MisionVision, Clientes, Contacto } from './pages'

const app = new Hono()

app.use(renderer)

// Redirects desde las URLs del sitio anterior (conserva SEO y enlaces compartidos)
const legacy: Record<string, string> = {
  '/index.html': '/',
  '/about.html': '/nosotros',
  '/services.html': '/servicios',
  '/gallery.html': '/clientes',
  '/contacts.html': '/contacto',
  '/misionvision.html': '/mision-vision',
}
for (const [from, to] of Object.entries(legacy)) app.get(from, (c) => c.redirect(to, 301))

app.get('/', (c) => c.render(<Home />))

app.get('/productos', (c) =>
  c.render(<Productos />, {
    title: 'Productos Siigo Aspel',
    description: 'Aspel SAE, COI, NOI, CAJA, FACTURE, BANCO, PROD y más. Precios desde, más IVA. Distribuidor Integral Certificado Siigo Aspel.',
  } as any)
)
app.get('/servicios', (c) =>
  c.render(<Servicios />, {
    title: 'Servicios',
    description: 'Consultoría, soporte técnico, capacitación, conectividad remota, mantenimiento de equipo y redes, y licenciamiento Microsoft.',
  } as any)
)
app.get('/nosotros', (c) =>
  c.render(<Nosotros />, {
    title: 'Nosotros',
    description: 'Más de 20 años en consultoría y soporte de sistemas administrativos. Distribuidor Black certificado Siigo Aspel.',
  } as any)
)
app.get('/mision-vision', (c) =>
  c.render(<MisionVision />, { title: 'Misión y visión' } as any)
)
app.get('/clientes', (c) =>
  c.render(<Clientes />, {
    title: 'Nuestros clientes',
    description: 'Empresas que confían en Marino Consultores para sus sistemas administrativos y soporte técnico.',
  } as any)
)
app.get('/contacto', (c) =>
  c.render(<Contacto />, {
    title: 'Contacto',
    description: 'Contáctanos por WhatsApp o teléfono: 777 202 9573 y 777 327 3970. Servicio a domicilio sin cargo extra.',
  } as any)
)

app.get('/robots.txt', (c) =>
  c.text('User-agent: *\nAllow: /\nSitemap: https://marinoconsultores.com/sitemap.xml\n')
)
app.get('/sitemap.xml', (c) => {
  const urls = ['/', '/productos', '/servicios', '/nosotros', '/mision-vision', '/clientes', '/contacto']
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map((u) => `<url><loc>https://marinoconsultores.com${u}</loc></url>`)
    .join('')}</urlset>`
  return c.body(xml, 200, { 'Content-Type': 'application/xml' })
})

app.notFound((c) => {
  c.status(404)
  return c.render(
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Error 404</span>
        <h1>Esta página no existe</h1>
        <p class="lead">Quizá el enlace cambió. Vuelve al inicio o escríbenos.</p>
        <a class="btn btn-primary" href="/">Volver al inicio</a>
      </div>
    </section>
  )
})

export default app
