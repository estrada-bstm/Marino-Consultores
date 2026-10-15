import { raw } from 'hono/html'
import { NAV, SITE, waLink, type Product, fmtPrice } from './data'

const ICONS: Record<string, string> = {
  headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 16a2 2 0 0 1-2 2h-1v-6h3z"/><path d="M3 16a2 2 0 0 0 2 2h1v-6H3z"/><path d="M19 18a4 4 0 0 1-4 4h-2"/>',
  graduation: '<path d="m22 10-10-5L2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 0 1 0 9z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L22 13.6a2 2 0 0 1 0 2.8l-5.6 5.6a2 2 0 0 1-2.8 0L2 10.4 7.6 4.8a2 2 0 0 1 2.8 0z" opacity="0"/><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  server: '<rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M16 7l3 3M14 9l2 2"/>',
  whatsapp: '<path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 9.5c0 3 2.500 5.500 5.500 5.500l1-1.500-2-1-1 .8a4 4 0 0 1-1.800-1.800l.8-1-1-2z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.500 13.500 17 22l-5-3-5 3 1.500-8.500"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  eye: '<path d="M2 12s3.500-7 10-7 10 7 10 7-3.500 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',
  x: '<path d="M4 4l16 16M20 4 4 20"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
}

export const Icon = ({ name, size = 22, cls = '' }: { name: string; size?: number; cls?: string }) => (
  <svg
    class={`ico ${cls}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    {raw(ICONS[name] || '')}
  </svg>
)

export const Header = ({ path }: { path: string }) => (
  <header id="site-header" class="site-header">
    <div class="topbar">
      <div class="container topbar-inner">
        <span><Icon name="shield" size={15} /> Distribuidor Integral Certificado Siigo Aspel</span>
        <span class="topbar-right">
          <a href={`tel:${SITE.phone1Raw}`}><Icon name="phone" size={14} /> {SITE.phone1}</a>
          <a href={`tel:${SITE.phone2Raw}`} class="hide-sm"><Icon name="phone" size={14} /> {SITE.phone2}</a>
        </span>
      </div>
    </div>
    <div class="container nav-inner">
      <a href="/" class="brand" aria-label="Marino Consultores - Inicio">
        <img src="/static/img/marino-logo.png" alt="Marino Consultores" width="56" height="58" />
        <span class="brand-text">
          <strong>MARINO</strong>
          <small>consultores</small>
        </span>
      </a>
      <nav id="main-nav" class="main-nav" aria-label="Principal">
        {NAV.filter((n) => n.href !== '/contacto').map((n) => (
          <a href={n.href} class={path === n.href ? 'active' : ''}>{n.label}</a>
        ))}
        <a href="/contacto" class="btn btn-primary btn-sm nav-cta">Contacto</a>
      </nav>
      <button id="nav-toggle" class="nav-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav">
        <Icon name="menu" size={26} />
      </button>
    </div>
  </header>
)

export const Footer = () => (
  <footer id="site-footer" class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="brand brand-light">
          <img src="/static/img/marino-logo.png" alt="" width="56" height="58" />
          <span class="brand-text"><strong>MARINO</strong><small>consultores</small></span>
        </div>
        <p>
          Más de 20 años especializados en consultoría y soporte técnico de sistemas administrativos para empresas,
          negocios y particulares. Distribuidor Integral Certificado Siigo Aspel.
        </p>
        <div class="socials">
          <a href={SITE.facebook} aria-label="Facebook" target="_blank" rel="noopener"><Icon name="facebook" size={18} /></a>
          <a href={SITE.instagram} aria-label="Instagram" target="_blank" rel="noopener"><Icon name="instagram" size={18} /></a>
          <a href={SITE.x} aria-label="X" target="_blank" rel="noopener"><Icon name="x" size={16} /></a>
          <a href={waLink('Hola, me gustaría recibir información.')} aria-label="WhatsApp" target="_blank" rel="noopener"><Icon name="whatsapp" size={18} /></a>
        </div>
      </div>
      <div>
        <h4>Navegación</h4>
        <ul>
          {NAV.map((n) => (<li><a href={n.href}>{n.label}</a></li>))}
          <li><a href="/mision-vision">Misión y visión</a></li>
        </ul>
      </div>
      <div>
        <h4>Productos</h4>
        <ul>
          <li><a href="/productos#sae">Aspel SAE</a></li>
          <li><a href="/productos#coi">Aspel COI</a></li>
          <li><a href="/productos#noi">Aspel NOI</a></li>
          <li><a href="/productos#facture">Aspel FACTURE</a></li>
          <li><a href="/productos#caja">Aspel CAJA</a></li>
          <li><a href={SITE.downloads} target="_blank" rel="noopener">Centro de descargas <Icon name="external" size={12} /></a></li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul class="contact-list">
          <li><Icon name="phone" size={16} /> <a href={`tel:${SITE.phone1Raw}`}>{SITE.phone1}</a></li>
          <li><Icon name="whatsapp" size={16} /> <a href={waLink('Hola, me gustaría recibir información.')} target="_blank" rel="noopener">{SITE.phone2}</a></li>
          <li><Icon name="home" size={16} /> Servicio a domicilio sin cargo extra a 10 km a la redonda de nuestras oficinas</li>
        </ul>
        <p class="pay-label">Aceptamos todas las tarjetas</p>
        <div class="pay-row" aria-label="Métodos de pago">
          <span>VISA</span><span>Mastercard</span><span>AMEX</span><span>Carnet</span><span>Samsung Pay</span>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {new Date().getFullYear()} Marino Consultores. Todos los derechos reservados.</span>
      <span>Siigo Aspel es marca de sus respectivos propietarios.</span>
    </div>
  </footer>
)

export const FloatWa = () => (
  <a
    id="wa-float"
    class="wa-float"
    href={waLink('Hola, me gustaría recibir información sobre sus productos y servicios.')}
    target="_blank"
    rel="noopener"
    aria-label="Escríbenos por WhatsApp"
  >
    <Icon name="whatsapp" size={28} />
    <span>¿Hablamos?</span>
  </a>
)

export const PageHero = ({ eyebrow, title, lead, crumb }: { eyebrow: string; title: string; lead?: string; crumb: string }) => (
  <section id="page-hero" class="page-hero">
    <div class="container">
      <nav class="crumbs" aria-label="Migas de pan"><a href="/">Inicio</a><span>/</span><span>{crumb}</span></nav>
      <span class="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {lead && <p class="lead">{lead}</p>}
    </div>
  </section>
)

export const CtaBand = ({ title = '¿Listo para llevar tu empresa al siguiente nivel?', text = 'Platícanos de tu negocio y te preparamos una propuesta a la medida. Orientación sin costo por WhatsApp.' }: { title?: string; text?: string }) => (
  <section id="cta-band" class="cta-band">
    <div class="container cta-inner reveal">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-wa btn-lg" href={waLink('Hola, quiero una cotización.')} target="_blank" rel="noopener">
          <Icon name="whatsapp" size={20} /> Escribir por WhatsApp
        </a>
        <a class="btn btn-ghost-light btn-lg" href="/contacto">Formulario de contacto</a>
      </div>
    </div>
  </section>
)

export const ProductCard = ({ p }: { p: Product }) => (
  <article id={p.id} class="product-card reveal" data-cat={p.category} style={`--accent:${p.color}`}>
    <div class="product-media">
      <img src={p.img} alt={p.name} loading="lazy" width="120" height="120" />
    </div>
    <div class="product-body">
      <span class="chip">{p.short}</span>
      <h3>{p.name}</h3>
      <p>{p.desc}</p>
    </div>
    <div class="product-foot">
      <div class="price">
        {p.price ? (
          <>
            <small>Desde</small>
            <strong>{fmtPrice(p.price)}</strong>
            <small>+ IVA</small>
          </>
        ) : (
          <strong class="price-ask">Consulta precio</strong>
        )}
      </div>
      <div class="product-actions">
        {p.sheet && (
          <a class="icon-btn" href={p.sheet} target="_blank" rel="noopener" title="Ver ficha técnica" aria-label={`Ficha técnica de ${p.name}`}>
            <Icon name="download" size={18} />
          </a>
        )}
        <a class="btn btn-primary btn-sm" href={waLink(`Hola, me interesa ${p.name}. ¿Me pueden dar más información?`)} target="_blank" rel="noopener">
          Cotizar
        </a>
      </div>
    </div>
  </article>
)
