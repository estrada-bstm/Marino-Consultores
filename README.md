# Marino Consultores — Rework web

Rediseño completo de https://marinoconsultores.com/ (sitio estático de 6 páginas, plantilla de 2015) a un sitio moderno,
responsive y rápido sobre **Hono + Cloudflare Pages** (SSR en el edge, sin dependencias de frontend).

## Páginas
| Ruta | Contenido | URL anterior (301) |
|---|---|---|
| `/` | Hero, estadísticas, Timbrado Siigo Aspel, productos destacados, servicios, nube, clientes, otros productos | `/index.html` |
| `/productos` | Catálogo de 11 productos con filtro por categoría, precios "desde + IVA", fichas técnicas y cotización por WhatsApp | (antes dentro del inicio) |
| `/servicios` | 6 servicios + proceso de trabajo | `/services.html` |
| `/nosotros` | Quiénes somos, compromiso, distintivo Distribuidor Black | `/about.html` |
| `/mision-vision` | Misión y visión | `/misionvision.html` |
| `/clientes` | 10 logos de clientes con enlace | `/gallery.html` |
| `/contacto` | Formulario que abre WhatsApp con el mensaje armado + datos de contacto | `/contacts.html` |
| `/robots.txt`, `/sitemap.xml` | SEO | |

## Estructura
- `src/data.ts` — datos del sitio: productos, precios, servicios, clientes, navegación (**editar aquí precios/textos**).
- `src/components.tsx` — header, footer, iconos SVG, tarjetas, CTA.
- `src/pages.tsx` — contenido de cada página.
- `src/renderer.tsx` — layout HTML, SEO/Open Graph, JSON-LD LocalBusiness.
- `public/static/style.css` — sistema de diseño; `public/static/app.js` — menú, reveal, contadores, filtros, formulario.

## Notas
- Contenido, precios, teléfonos y enlaces conservados del sitio original. Se corrigió ortografía menor.
- El formulario no usa backend: abre WhatsApp (777 327 3970). Si se desea correo, añadir un endpoint (p. ej. Resend) en Hono.
- Pendientes: logos de 6 clientes (AllKey, Barragán, Bio-Vin, Caramyau, Lab. Guillén, Mpio. Zapata) no se pudieron descargar del sitio original (404);
  fichas técnicas de Aspel enlazan al sitio oficial; "Aspel CONTA Asistente" no tenía precio publicado.
- Los métodos de pago se muestran como texto (los íconos originales no estaban disponibles).

## Desarrollo
```bash
npm run build && pm2 start ecosystem.config.cjs   # http://localhost:3000
```
Deploy: `npm run deploy` (Cloudflare Pages). **Estado**: sin desplegar.
