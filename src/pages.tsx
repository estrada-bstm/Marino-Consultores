import { Icon, ProductCard, PageHero, CtaBand } from './components'
import { PRODUCTS, CATEGORIES, SERVICES, CLIENTS, SITE, waLink, fmtPrice } from './data'

/* ---------------------------------- HOME --------------------------------- */
export const Home = () => {
  const featured = PRODUCTS.filter((p) => p.featured)
  return (
    <>
      <section id="hero" class="hero">
        <div class="hero-bg" aria-hidden="true"></div>
        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="eyebrow eyebrow-light"><Icon name="award" size={16} /> Distribuidor Integral Certificado Siigo Aspel</span>
            <h1>La solución integral a tus <span class="grad">necesidades de sistemas</span></h1>
            <p class="lead">
              Software administrativo, contable, de nómina y facturación, con soporte técnico, capacitación y equipo de
              cómputo. Más de 20 años acompañando a empresas de Morelos.
            </p>
            <div class="hero-actions">
              <a class="btn btn-wa btn-lg" href={waLink('Hola, quiero una cotización.')} target="_blank" rel="noopener">
                <Icon name="whatsapp" size={20} /> Cotizar por WhatsApp
              </a>
              <a class="btn btn-ghost-light btn-lg" href="/productos">Ver productos <Icon name="arrow" size={18} /></a>
            </div>
            <ul class="hero-points">
              <li><Icon name="check" size={16} /> Ingenieros certificados</li>
              <li><Icon name="check" size={16} /> Soporte remoto</li>
              <li><Icon name="check" size={16} /> Servicio a domicilio sin cargo extra</li>
            </ul>
          </div>
          <div class="hero-visual" aria-hidden="true">
            <div class="orb orb-1"></div>
            <div class="orb orb-2"></div>
            <div class="hero-card">
              <img src="/static/img/badge-black.png" alt="" class="hero-badge" width="150" height="150" />
              <div class="hero-card-grid">
                {PRODUCTS.slice(0, 6).map((p) => (
                  <a href={`/productos#${p.id}`} class="mini-prod" style={`--accent:${p.color}`} tabindex="-1">
                    <img src={p.img} alt="" width="56" height="56" />
                    <span>{p.name.replace('Aspel ', '')}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" class="stats">
        <div class="container stats-grid">
          <div class="stat reveal"><strong data-count="20" data-suffix="+">20+</strong><span>Años de experiencia</span></div>
          <div class="stat reveal"><strong data-count="11" data-suffix="">11</strong><span>Productos Aspel</span></div>
          <div class="stat reveal"><strong data-count="10" data-suffix="">10</strong><span>km de servicio a domicilio sin costo</span></div>
          <div class="stat reveal"><strong>100%</strong><span>Equipo certificado</span></div>
        </div>
      </section>

      <section id="sellado" class="section">
        <div class="container split">
          <div class="split-media reveal">
            <div class="media-card">
              <img src="/static/img/aspel-sellado.jpg" alt="Aspel Sellado CFDI" width="320" height="310" loading="lazy" />
            </div>
          </div>
          <div class="split-copy reveal">
            <span class="eyebrow">Tu declaración fiscal a tiempo</span>
            <h2>Timbrado Siigo Aspel: cumple con el SAT sin complicaciones</h2>
            <p>
              El timbrado Siigo Aspel permite generar Comprobantes Fiscales Digitales por Internet desde los sistemas
              Aspel SAE, Aspel CAJA, Aspel FACTURE o Aspel NOI.
            </p>
            <ul class="check-list">
              <li><Icon name="check" size={18} /> CFDI 4.0 vigente</li>
              <li><Icon name="check" size={18} /> Nómina electrónica</li>
              <li><Icon name="check" size={18} /> Contabilidad electrónica 1.3</li>
            </ul>
            <a class="btn btn-primary" href={SITE.catalogWa} target="_blank" rel="noopener">
              Consulta los paquetes y precios <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="productos-destacados" class="section section-alt">
        <div class="container">
          <header class="section-head reveal">
            <span class="eyebrow">Soluciones para tu éxito</span>
            <h2>Software que hace crecer tu empresa</h2>
            <p>Diseñado para administrar, contabilizar, facturar, vender y pagar nómina. Elige el sistema que necesitas.</p>
          </header>
          <div class="grid grid-3">
            {featured.map((p) => (<ProductCard p={p} />))}
          </div>
          <div class="center mt">
            <a class="btn btn-outline" href="/productos">Ver los 11 productos <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>

      <section id="servicios-resumen" class="section">
        <div class="container">
          <header class="section-head reveal">
            <span class="eyebrow">Servicios</span>
            <h2>Todo lo que tu operación necesita, en un solo lugar</h2>
            <p>Digitalizamos tu empresa y garantizamos su estabilidad con soporte, capacitación y mantenimiento continuo.</p>
          </header>
          <div class="grid grid-3">
            {SERVICES.map((s) => (
              <article class="service-card reveal">
                <span class="service-ico"><Icon name={s.icon} size={26} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cloud" class="section cloud-sec">
        <div class="container split split-rev">
          <div class="split-copy reveal">
            <span class="eyebrow eyebrow-light">Nube y acceso remoto</span>
            <h2>Tus sistemas, desde cualquier dispositivo</h2>
            <p>
              Servidor Virtual Aspel permite acceder a tus sistemas, apps y servicios Aspel desde cualquier lugar y en
              cualquier momento, de forma eficiente, sencilla y segura.
            </p>
            <p class="muted-light">
              Y si prefieres una alternativa a Windows Remote Desktop Services o Citrix, te ofrecemos <strong>Terminal Service Plus</strong>:
              aplicaciones remotas que se ven y funcionan como si corrieran localmente, incluso en redes de alta latencia.
            </p>
            <div class="hero-actions">
              <a class="btn btn-wa" href={waLink('Hola, me interesa Servidor Virtual Aspel / Terminal Service Plus.')} target="_blank" rel="noopener">
                <Icon name="whatsapp" size={18} /> Solicitar información
              </a>
              <span class="price-pill">Servidor Virtual desde <strong>{fmtPrice(1060)}</strong> + IVA</span>
            </div>
          </div>
          <div class="split-media reveal">
            <div class="media-card media-dark">
              <img src="/static/img/servidor-virtual.jpg" alt="Servidor Virtual Aspel" width="320" height="360" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section id="clientes-resumen" class="section section-alt">
        <div class="container">
          <header class="section-head reveal">
            <span class="eyebrow">Confían en nosotros</span>
            <h2>Empresas que ya trabajan con Marino Consultores</h2>
          </header>
          <div class="logo-wall reveal">
            {CLIENTS.slice(0, 10).map((c) => (
              <a href={c.url} target="_blank" rel="noopener" class="logo-tile" title={c.name}>
                <img src={`/static/img/clientes/${c.img}.jpg`} alt={c.name} loading="lazy" width="218" height="138" />
              </a>
            ))}
          </div>
          <div class="center mt">
            <a class="btn btn-outline" href="/clientes">Ver todos los clientes</a>
          </div>
        </div>
      </section>

      <section id="otros" class="section">
        <div class="container">
          <header class="section-head reveal">
            <span class="eyebrow">Otros productos</span>
            <h2>Infraestructura y licenciamiento</h2>
          </header>
          <div class="grid grid-3">
            <article class="service-card reveal">
              <span class="service-ico"><Icon name="cloud" size={26} /></span>
              <h3>Terminal Service Plus</h3>
              <p>Alternativa a Windows Remote Desktop Services o Citrix. Acceso rápido y eficiente a través de redes de alta latencia, completamente transparente para tus usuarios.</p>
              <a class="link-arrow" href={waLink('Hola, me interesa Terminal Service Plus.')} target="_blank" rel="noopener">Solicita más información <Icon name="arrow" size={16} /></a>
            </article>
            <article class="service-card reveal">
              <span class="service-ico"><Icon name="key" size={26} /></span>
              <h3>Licenciamiento Microsoft</h3>
              <p>Descubre cómo las distintas opciones de licencias ayudan a tu organización a obtener el mayor beneficio al comprar y administrar tus productos Windows, Windows Server, Office y servicios de Microsoft.</p>
              <a class="link-arrow" href={waLink('Hola, me interesa el licenciamiento Microsoft.')} target="_blank" rel="noopener">Solicita más información <Icon name="arrow" size={16} /></a>
            </article>
            <article class="service-card reveal">
              <span class="service-ico"><Icon name="server" size={26} /></span>
              <h3>Equipo de cómputo y servidores</h3>
              <p>La mejor calidad en equipo de cómputo y servidores, garantizando un excelente desempeño tanto con equipo ensamblado como de línea.</p>
              <a class="link-arrow" href={waLink('Hola, quiero cotizar equipo de cómputo / servidores.')} target="_blank" rel="noopener">Solicita cotización <Icon name="arrow" size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

/* -------------------------------- PRODUCTOS ------------------------------- */
export const Productos = () => (
  <>
    <PageHero
      crumb="Productos"
      eyebrow="Catálogo Siigo Aspel"
      title="Sistemas que impulsan tu negocio"
      lead="Software administrativo, contable, de nómina, facturación y punto de venta. Precios desde, más IVA."
    />
    <section id="catalogo" class="section">
      <div class="container">
        <div id="filters" class="filters" role="tablist" aria-label="Filtrar por categoría">
          {CATEGORIES.map((c, i) => (
            <button class={`filter ${i === 0 ? 'active' : ''}`} data-filter={c.id} role="tab" aria-selected={i === 0 ? 'true' : 'false'}>
              {c.label}
            </button>
          ))}
        </div>
        <div id="product-grid" class="grid grid-3">
          {PRODUCTS.map((p) => (<ProductCard p={p} />))}
        </div>
        <aside class="note reveal">
          <Icon name="shield" size={22} />
          <p>
            ¿No sabes cuál elegir? Cuéntanos cómo opera tu negocio y te recomendamos la combinación ideal. Además,
            visita el <a href={SITE.downloads} target="_blank" rel="noopener">Centro de descargas Siigo Aspel</a>.
          </p>
        </aside>
      </div>
    </section>
    <CtaBand title="Te ayudamos a elegir el sistema ideal" />
  </>
)

/* -------------------------------- SERVICIOS ------------------------------- */
export const Servicios = () => (
  <>
    <PageHero
      crumb="Servicios"
      eyebrow="100% garantizado"
      title="Servicios para digitalizar y conectar tu empresa"
      lead="A través de nuestros servicios digitalizamos tu empresa y te conectamos con el planeta. Garantizamos estabilidad con mantenimiento preventivo de tus equipos y redes en todo momento."
    />
    <section id="lista-servicios" class="section">
      <div class="container">
        <div class="grid grid-2">
          {SERVICES.map((s) => (
            <article class="service-card service-card-lg reveal">
              <span class="service-ico"><Icon name={s.icon} size={28} /></span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul class="check-list compact">
                  {s.points.map((pt) => (<li><Icon name="check" size={16} /> {pt}</li>))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="proceso" class="section section-alt">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">Cómo trabajamos</span>
          <h2>Un proceso simple, de la mano contigo</h2>
        </header>
        <ol class="steps">
          <li class="reveal"><span>1</span><h3>Diagnóstico</h3><p>Analizamos los requerimientos específicos de tu empresa.</p></li>
          <li class="reveal"><span>2</span><h3>Propuesta</h3><p>Te ofrecemos una solución a la medida de tu negocio.</p></li>
          <li class="reveal"><span>3</span><h3>Implementación</h3><p>Instalamos, configuramos y capacitamos a tu equipo.</p></li>
          <li class="reveal"><span>4</span><h3>Soporte continuo</h3><p>Te acompañamos y respaldamos en cada paso, en sitio o remoto.</p></li>
        </ol>
      </div>
    </section>
    <CtaBand />
  </>
)

/* --------------------------------- NOSOTROS ------------------------------- */
export const Nosotros = () => (
  <>
    <PageHero
      crumb="Nosotros"
      eyebrow="¿Quiénes somos?"
      title="Más de 20 años cuidando la información de tu empresa"
      lead="Somos una empresa legalmente constituida conforme a las leyes de los Estados Unidos Mexicanos, especializada en consultoría y soporte técnico de sistemas administrativos."
    />
    <section id="quienes-somos" class="section">
      <div class="container split">
        <div class="split-copy reveal">
          <p>
            Nuestro objeto nos permite, entre otras actividades, prestar servicios técnicos, consultivos, asesoría y
            reparación de equipo de cómputo, contando con personal capacitado y certificado e instalaciones necesarias
            para llevar a cabo dichos servicios.
          </p>
          <p>
            Esto significa para nosotros un amplio compromiso con nuestros clientes: estamos conscientes de que la
            información almacenada en los equipos que deposita con entera confianza en nuestras manos equivale al
            resultado de largas jornadas de trabajo. Por eso le ofrecemos calidad, seguridad, responsabilidad y el mejor
            de los servicios para su equipo de cómputo.
          </p>
          <p>
            En los últimos 20 años nos hemos especializado en la consultoría y soporte técnico de sistemas
            administrativos para empresas, negocios y particulares, principalmente de la marca ASPEL, obteniendo la
            certificación y distribución con el objetivo de ofrecerle un servicio 100% integral.
          </p>
        </div>
        <div class="split-media reveal">
          <div class="media-card">
            <img src="/static/img/distribuidor-autorizado.jpg" alt="Siigo Aspel distribuidor autorizado" width="520" height="220" loading="lazy" />
          </div>
          <div class="badge-row">
            <img src="/static/img/badge-black.png" alt="Distribuidor Black Siigo Aspel" width="110" height="110" loading="lazy" />
            <p><strong>Distribuidor Black</strong><br />Aspel de México nos avala como empresa especializada en tecnología de información y consultoría.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="valores" class="section section-alt">
      <div class="container">
        <header class="section-head reveal">
          <span class="eyebrow">Por qué elegirnos</span>
          <h2>Un equipo rigurosamente evaluado y certificado</h2>
          <p>Ingenieros certificados en todos los sistemas de la línea Aspel, capaces de brindar soluciones integrales de alta calidad sin importar el tamaño o complejidad del proyecto.</p>
        </header>
        <div class="grid grid-4">
          <article class="value-card reveal"><span class="service-ico"><Icon name="award" size={26} /></span><h3>Certificación</h3><p>Avalados por Aspel de México en toda la línea de sistemas.</p></article>
          <article class="value-card reveal"><span class="service-ico"><Icon name="shield" size={26} /></span><h3>Seguridad</h3><p>Tu información en manos responsables y profesionales.</p></article>
          <article class="value-card reveal"><span class="service-ico"><Icon name="whatsapp" size={26} /></span><h3>Cercanía</h3><p>Orientación sin costo vía WhatsApp y soporte remoto.</p></article>
          <article class="value-card reveal"><span class="service-ico"><Icon name="home" size={26} /></span><h3>A domicilio</h3><p>Servicio sin cargo extra a 10 km a la redonda.</p></article>
        </div>
      </div>
    </section>

    <section id="compromiso" class="section">
      <div class="container split split-rev">
        <div class="split-copy reveal">
          <span class="eyebrow">Nuestro compromiso</span>
          <h2>Estamos contigo en cada paso</h2>
          <p>
            Garantizarle que se encuentra en manos profesionales, expertos verdaderamente calificados y certificados
            para ofrecerle un soporte técnico de calidad, impartir una capacitación en el momento que lo requiera y así
            lograr que sus sistemas funcionen a la perfección, soportados por equipo de la mejor calidad.
          </p>
          <p>
            Además de proporcionarle las herramientas tecnológicas, le acompañamos y le respaldamos para que logre un
            control exitoso de sus operaciones, con soporte técnico vía remota si las circunstancias lo permiten y
            orientación sin costo vía WhatsApp.
          </p>
          <a class="btn btn-primary" href="/mision-vision">Misión y visión <Icon name="arrow" size={18} /></a>
        </div>
        <div class="split-media reveal">
          <div class="media-card"><img src="/static/img/aspel-sellado.jpg" alt="" width="300" height="290" loading="lazy" /></div>
        </div>
      </div>
    </section>
    <CtaBand />
  </>
)

/* ------------------------------ MISIÓN Y VISIÓN --------------------------- */
export const MisionVision = () => (
  <>
    <PageHero
      crumb="Misión y visión"
      eyebrow="Hacia dónde vamos"
      title="Misión y visión"
      lead="Los principios que guían nuestro trabajo con cada cliente."
    />
    <section id="mv" class="section">
      <div class="container grid grid-2">
        <article class="mv-card reveal">
          <span class="service-ico"><Icon name="target" size={28} /></span>
          <h2>Misión</h2>
          <p>
            A través de nuestra experiencia y capacitación continua, contribuir al buen funcionamiento de los equipos
            de cómputo y sistemas administrativos para que nuestros clientes experimenten soluciones reales que les
            permitan llegar a sus objetivos.
          </p>
        </article>
        <article class="mv-card mv-card-alt reveal">
          <span class="service-ico"><Icon name="eye" size={28} /></span>
          <h2>Visión</h2>
          <p>
            Garantizarle que se encuentra en manos profesionales, expertos verdaderamente calificados y certificados
            para ofrecerle un soporte técnico de calidad, impartir una capacitación en el momento que lo requiera y así
            lograr que sus sistemas funcionen a la perfección, soportados por equipo de la mejor calidad, además de
            proporcionarle las herramientas tecnológicas. Le acompañamos y le respaldamos en cada paso para que logre un
            control exitoso de sus operaciones, con soporte técnico vía remota si las circunstancias lo permiten y
            orientación sin costo vía WhatsApp.
          </p>
        </article>
      </div>
    </section>
    <CtaBand />
  </>
)

/* --------------------------------- CLIENTES ------------------------------- */
export const Clientes = () => (
  <>
    <PageHero
      crumb="Clientes"
      eyebrow="Nuestros clientes"
      title="Empresas que confían en nosotros"
      lead="Negocios de distintos giros trabajan día a día con los sistemas y el soporte de Marino Consultores."
    />
    <section id="clientes" class="section">
      <div class="container">
        <div class="logo-wall logo-wall-lg">
          {CLIENTS.map((c) => (
            <a href={c.url} target="_blank" rel="noopener" class="logo-tile reveal" title={c.name}>
              <img src={`/static/img/clientes/${c.img}.jpg`} alt={c.name} loading="lazy" width="218" height="138" />
              <span>{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
    <CtaBand title="¿Quieres ser el siguiente?" text="Sumemos tu empresa a quienes ya confían en nuestros sistemas y soporte." />
  </>
)

/* --------------------------------- CONTACTO ------------------------------- */
export const Contacto = () => (
  <>
    <PageHero
      crumb="Contacto"
      eyebrow="Contáctanos"
      title="Contáctanos y en breve te atendemos"
      lead="Cuéntanos qué necesitas. Te respondemos por WhatsApp con una orientación sin costo."
    />
    <section id="contacto" class="section">
      <div class="container contact-grid">
        <form id="contact-form" class="form-card reveal" novalidate>
          <h2>Por favor proporcione sus datos</h2>
          <div class="field">
            <label for="f-nombre">Nombre completo</label>
            <input id="f-nombre" name="nombre" type="text" autocomplete="name" required placeholder="Tu nombre" />
          </div>
          <div class="field-row">
            <div class="field">
              <label for="f-email">Correo electrónico</label>
              <input id="f-email" name="email" type="email" autocomplete="email" placeholder="tu@correo.com" />
            </div>
            <div class="field">
              <label for="f-tel">Teléfono</label>
              <input id="f-tel" name="tel" type="tel" autocomplete="tel" placeholder="777 000 0000" />
            </div>
          </div>
          <div class="field">
            <label for="f-interes">Me interesa</label>
            <select id="f-interes" name="interes">
              <option>Software Aspel</option>
              <option>Soporte técnico</option>
              <option>Capacitación</option>
              <option>Servidor Virtual / Terminal Service Plus</option>
              <option>Licenciamiento Microsoft</option>
              <option>Equipo de cómputo y servidores</option>
              <option>Otro</option>
            </select>
          </div>
          <div class="field">
            <label for="f-msg">Mensaje</label>
            <textarea id="f-msg" name="mensaje" rows={4} required placeholder="¿En qué te podemos ayudar?"></textarea>
          </div>
          <p id="form-error" class="form-error" role="alert" hidden></p>
          <button type="submit" class="btn btn-wa btn-lg btn-block">
            <Icon name="whatsapp" size={20} /> Enviar por WhatsApp
          </button>
          <small class="form-hint">Al enviar se abrirá WhatsApp con tu mensaje listo para mandar.</small>
        </form>

        <aside class="contact-side">
          <div class="info-card reveal">
            <h3>Habla con nosotros</h3>
            <ul class="info-list">
              <li><Icon name="phone" size={20} /><div><small>Teléfono</small><a href={`tel:${SITE.phone1Raw}`}>{SITE.phone1}</a></div></li>
              <li><Icon name="whatsapp" size={20} /><div><small>Celular / WhatsApp</small><a href={waLink('Hola, me gustaría recibir información.')} target="_blank" rel="noopener">{SITE.phone2}</a></div></li>
              <li><Icon name="home" size={20} /><div><small>Servicio a domicilio</small><span>Sin cargo extra a 10 km a la redonda de nuestras oficinas</span></div></li>
              <li><Icon name="clock" size={20} /><div><small>Orientación</small><span>Sin costo vía WhatsApp</span></div></li>
            </ul>
          </div>
          <div class="info-card reveal">
            <h3>Síguenos</h3>
            <div class="socials socials-dark">
              <a href={SITE.facebook} aria-label="Facebook" target="_blank" rel="noopener"><Icon name="facebook" size={18} /></a>
              <a href={SITE.instagram} aria-label="Instagram" target="_blank" rel="noopener"><Icon name="instagram" size={18} /></a>
              <a href={SITE.x} aria-label="X" target="_blank" rel="noopener"><Icon name="x" size={16} /></a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </>
)
