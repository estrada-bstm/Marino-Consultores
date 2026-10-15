(function () {
  var doc = document.documentElement
  doc.classList.add('js')

  // Header: sombra al hacer scroll
  var header = document.getElementById('site-header')
  var onScroll = function () { header && header.classList.toggle('scrolled', window.scrollY > 8) }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // Menú móvil
  var toggle = document.getElementById('nav-toggle')
  var nav = document.getElementById('main-nav')
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open')
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    })
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false') }
    })
  }

  // Reveal al hacer scroll
  var items = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 80 + 'ms'
      io.observe(el)
    })
  } else {
    items.forEach(function (el) { el.classList.add('in') })
  }

  // Contadores
  var counters = document.querySelectorAll('[data-count]')
  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return
        var el = en.target
        var end = parseInt(el.getAttribute('data-count'), 10)
        var suffix = el.getAttribute('data-suffix') || ''
        var t0 = performance.now()
        var dur = 1200
        var step = function (t) {
          var p = Math.min((t - t0) / dur, 1)
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + (p === 1 ? suffix : '')
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        co.unobserve(el)
      })
    }, { threshold: 0.6 })
    counters.forEach(function (c) { co.observe(c) })
  }

  // Filtros de productos
  var filters = document.getElementById('filters')
  if (filters) {
    var cards = document.querySelectorAll('#product-grid .product-card')
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter')
      if (!btn) return
      filters.querySelectorAll('.filter').forEach(function (b) {
        b.classList.remove('active'); b.setAttribute('aria-selected', 'false')
      })
      btn.classList.add('active'); btn.setAttribute('aria-selected', 'true')
      var f = btn.getAttribute('data-filter')
      cards.forEach(function (c) {
        var show = f === 'all' || c.getAttribute('data-cat') === f
        c.classList.toggle('hidden', !show)
        if (show) c.classList.add('in')
      })
    })
    // Si se llega con #producto, mostrar todo y resaltar
    if (location.hash) {
      var target = document.querySelector(location.hash)
      if (target) { target.classList.add('in'); target.style.boxShadow = '0 0 0 3px var(--blue-500)' }
    }
  }

  // Formulario -> WhatsApp
  var form = document.getElementById('contact-form')
  if (form) {
    var err = document.getElementById('form-error')
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var d = new FormData(form)
      var nombre = (d.get('nombre') || '').toString().trim()
      var mensaje = (d.get('mensaje') || '').toString().trim()
      var email = (d.get('email') || '').toString().trim()
      form.querySelectorAll('.invalid').forEach(function (i) { i.classList.remove('invalid') })
      var problems = []
      if (!nombre) { form.nombre.classList.add('invalid'); problems.push('tu nombre') }
      if (!mensaje) { form.mensaje.classList.add('invalid'); problems.push('un mensaje') }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { form.email.classList.add('invalid'); problems.push('un correo válido') }
      if (problems.length) {
        err.hidden = false
        err.textContent = 'Por favor ingresa ' + problems.join(', ') + '.'
        return
      }
      err.hidden = true
      var lines = [
        'Hola, soy ' + nombre + '.',
        'Me interesa: ' + d.get('interes'),
        mensaje,
      ]
      if (d.get('tel')) lines.push('Teléfono: ' + d.get('tel'))
      if (email) lines.push('Correo: ' + email)
      window.open('https://wa.me/5217773273970?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener')
    })
  }
})()
