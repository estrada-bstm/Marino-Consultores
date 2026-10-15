export const SITE = {
  name: 'Marino Consultores',
  tagline: 'La solución integral a tus necesidades de sistemas',
  phone1: '777 202 9573',
  phone1Raw: '+527772029573',
  phone2: '777 327 3970',
  phone2Raw: '+527773273970',
  wa: '5217773273970',
  waGeneric: 'https://wa.link/gd5x5r',
  facebook: 'https://www.facebook.com/marinoconsultores',
  instagram: 'https://www.instagram.com/marinoconsultores/',
  x: 'https://x.com/marinoconsultor',
  downloads: 'http://www.aspel.com.mx/descargas',
  catalogWa: 'https://wa.me/p/25501545689462019/5217773273970',
}

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.wa}?text=${encodeURIComponent(msg)}`

export type Category = 'admin' | 'conta' | 'nomina' | 'venta' | 'nube'

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'admin', label: 'Administración' },
  { id: 'conta', label: 'Contabilidad y fiscal' },
  { id: 'nomina', label: 'Nómina' },
  { id: 'venta', label: 'Punto de venta' },
  { id: 'nube', label: 'Nube' },
]

export type Product = {
  id: string
  name: string
  short: string
  category: Category
  desc: string
  price: number | null
  color: string
  img: string
  sheet: string
  featured?: boolean
}

const A = 'https://www.aspel.com.mx/assets/aspelcom/images/productos'

export const PRODUCTS: Product[] = [
  {
    id: 'sae',
    name: 'Aspel SAE',
    short: 'Sistema administrativo empresarial',
    category: 'admin',
    desc: 'Controla todo el ciclo de las operaciones de compra-venta de la empresa, automatizando eficientemente los procesos administrativos.',
    price: 1108,
    color: '#e11d48',
    img: '/static/img/sae.png',
    sheet: 'https://assets-latam-mx-wp-pd-cmhfg3g8dja4gaad.a03.azurefd.net/wordpress/2025/09/Ficha-tecnica-SAE-10.00-2025.pdf',
    featured: true,
  },
  {
    id: 'coi',
    name: 'Aspel COI',
    short: 'Contabilidad e información fiscal',
    category: 'conta',
    desc: 'Cumple con la Contabilidad Electrónica 1.3 y mantiene actualizada la información contable y fiscal de la empresa de forma segura.',
    price: 559,
    color: '#0ea5c6',
    img: '/static/img/coi.png',
    sheet: `${A}/coi/ficha-tecnica-coi.pdf`,
    featured: true,
  },
  {
    id: 'noi',
    name: 'Aspel NOI',
    short: 'Nómina y capital humano',
    category: 'nomina',
    desc: 'Automatiza el control de los aspectos más importantes de la nómina, administra el Capital Humano y genera Recibos de Nómina Electrónicos.',
    price: 679,
    color: '#f97316',
    img: '/static/img/noi.png',
    sheet: `${A}/noi/ficha-tecnica-noi.pdf`,
    featured: true,
  },
  {
    id: 'caja',
    name: 'Aspel CAJA',
    short: 'Punto de venta',
    category: 'venta',
    desc: 'Controla y administra las operaciones de ventas, facturación e inventarios de uno o varios comercios, convirtiendo una computadora en un punto de venta.',
    price: 299,
    color: '#eab308',
    img: '/static/img/caja.png',
    sheet: `${A}/caja/ficha-tecnica-caja.pdf`,
    featured: true,
  },
  {
    id: 'facture',
    name: 'Aspel FACTURE',
    short: 'Facturación electrónica CFDI 4.0',
    category: 'conta',
    desc: 'Genera de forma segura CFDI 4.0 de acuerdo con las disposiciones fiscales vigentes, no importa tu profesión, giro comercial o si eres persona física o moral.',
    price: 250,
    color: '#be123c',
    img: '/static/img/facture.png',
    sheet: `${A}/facture/ficha-tecnica-facture.pdf`,
    featured: true,
  },
  {
    id: 'banco',
    name: 'Aspel BANCO',
    short: 'Control de cuentas bancarias',
    category: 'conta',
    desc: 'Controla eficientemente los movimientos de cualquier cuenta bancaria. Ofrece información financiera como estados de cuenta, diarios de bancos y flujo de efectivo.',
    price: 580,
    color: '#65a30d',
    img: '/static/img/banco.png',
    sheet: `${A}/banco/ficha-tecnica-banco.pdf`,
    featured: true,
  },
  {
    id: 'prod',
    name: 'Aspel PROD',
    short: 'Producción y manufactura',
    category: 'admin',
    desc: 'Permite la planeación y control de los procesos de fabricación de la empresa, asegurando una óptima administración de inventarios y costos.',
    price: 862,
    color: '#6d4aa8',
    img: '/static/img/prod.png',
    sheet: `${A}/prod/ficha-tecnica-prod.pdf`,
  },
  {
    id: 'adm',
    name: 'Aspel ADM',
    short: 'Administración móvil',
    category: 'admin',
    desc: 'Gestiona las principales operaciones de compra-venta desde cualquier lugar y en todo momento de manera fácil, eficiente y segura.',
    price: 213,
    color: '#0369a1',
    img: '/static/img/adm.png',
    sheet: `${A}/adm/ficha-tecnica-adm.pdf`,
  },
  {
    id: 'noi-asistente',
    name: 'Aspel NOI Asistente',
    short: 'App de asistencia de personal',
    category: 'nomina',
    desc: 'App que lleva el registro de asistencia de tu personal, así como el control de sus incidencias laborales, como vacaciones, permisos, incapacidades y faltas.',
    price: 124,
    color: '#fb923c',
    img: '/static/img/noi-asistente.png',
    sheet: `${A}/noi-asistente/ficha-tecnica-noi-asistente.pdf`,
  },
  {
    id: 'conta-asistente',
    name: 'Aspel CONTA Asistente',
    short: 'App de control financiero',
    category: 'conta',
    desc: 'App que lleva el control y registro preciso de tus movimientos financieros de ingresos, egresos y adquisición de bienes a partir de comprobantes fiscales.',
    price: null,
    color: '#0d9488',
    img: '/static/img/conta-asistente.png',
    sheet: `${A}/conta-asistente/folleto-conta-asistente.pdf`,
  },
  {
    id: 'servidor-virtual',
    name: 'Servidor Virtual Aspel',
    short: 'Tus sistemas en la nube',
    category: 'nube',
    desc: 'Servicio en la nube que permite el acceso a los Sistemas, Apps y Servicios Aspel desde cualquier dispositivo vía Internet, de forma eficiente, sencilla y segura, desde cualquier lugar y momento.',
    price: 1060,
    color: '#06b6d4',
    img: '/static/img/servidor-virtual.jpg',
    sheet: '',
  },
]

export const fmtPrice = (n: number) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0 })

export const SERVICES = [
  {
    icon: 'headset',
    title: 'Consultoría y soporte técnico',
    text: 'Ingenieros certificados en toda la línea Aspel. Analizamos los requerimientos de tu empresa, diseñamos una propuesta a la medida y aseguramos una implementación óptima.',
    points: ['Implementación y migraciones', 'Soporte remoto', 'Orientación sin costo por WhatsApp'],
  },
  {
    icon: 'graduation',
    title: 'Capacitación',
    text: 'Capacitamos a tu equipo en el momento que lo requiera, para que tus sistemas funcionen a la perfección y saques el máximo provecho de cada módulo.',
    points: ['Sesiones presenciales o remotas', 'Por sistema y por área', 'Acompañamiento continuo'],
  },
  {
    icon: 'cloud',
    title: 'Conectividad remota y nube',
    text: 'Digitalizamos tu empresa y te conectamos con el planeta: accede a tus sistemas desde cualquier lugar con Servidor Virtual Aspel y Terminal Service Plus.',
    points: ['Servidor Virtual Aspel', 'Terminal Service Plus', 'Acceso desde cualquier dispositivo'],
  },
  {
    icon: 'wrench',
    title: 'Mantenimiento de equipo y redes',
    text: 'Garantizamos estabilidad con mantenimiento preventivo de tus equipos de cómputo y redes en todo momento. Reparación con personal capacitado y certificado.',
    points: ['Preventivo y correctivo', 'Redes y cableado', 'Respaldo de tu información'],
  },
  {
    icon: 'server',
    title: 'Equipo de cómputo y servidores',
    text: 'Calidad en equipo de cómputo y servidores, ensamblado y de línea, para garantizar un excelente desempeño en tu operación diaria.',
    points: ['Equipo ensamblado y de línea', 'Servidores', 'Cotización a la medida'],
  },
  {
    icon: 'key',
    title: 'Licenciamiento Microsoft',
    text: 'Descubre cómo las distintas opciones de licencias te ayudan a obtener el mayor beneficio al comprar y administrar tus productos Windows, Windows Server, Office y servicios de Microsoft.',
    points: ['Windows y Windows Server', 'Office y Microsoft 365', 'Asesoría de licenciamiento'],
  },
]

export const CLIENTS = [
  { name: 'Casas Tecnourbe', img: 'tecnourbe', url: 'http://www.casastecnourbe.com' },
  { name: 'Cerro Largo & Arachana Ediciones', img: 'cerrolargo', url: 'http://www.cerrolargo.com.mx' },
  { name: 'Tonivisa Cuernavaca', img: 'tonivisa', url: 'http://www.tonivisacuernavaca.com.mx' },
  { name: 'Casa Salinas', img: 'casasalinas', url: 'http://www.casasalinas.com.mx/' },
  { name: 'Catilsa', img: 'catilsa', url: 'http://www.catilsa.com.mx/' },
  { name: 'Diproansa', img: 'diproansa', url: 'https://diproansa.com/' },
  { name: 'El Ciruelo', img: 'elciruelo', url: 'http://www.elciruelo.com.mx/' },
  { name: 'Instapura', img: 'instapura', url: 'https://www.instapura.mx/' },
  { name: 'Maxi Vivienda', img: 'maxivivienda', url: 'https://maxivivienda.mx/' },
  { name: 'Symssa', img: 'symssa', url: 'https://www.facebook.com/SYMSSA-EQUIPOS-DE-PROTECCION-PERSONAL-317805808229982/' },
]

export const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Productos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/contacto', label: 'Contacto' },
]
