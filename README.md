# Optus · sitio principal

El sitio de **Optus** ([optus.lat](https://optus.lat)), la empresa detrás de
[Optipagos](https://optipagos.optus.lat) y [Optimype](https://optimype.optus.lat). Presenta los
productos (con sus tecnologías y enlaces), los reconocimientos, el contacto y las páginas legales.

| Dirección | Qué es | Repositorio |
| --- | --- | --- |
| `https://optus.lat` | Este sitio | `optus-main-frontend` |
| `https://optipagos.optus.lat` | Optipagos, billetera en WhatsApp | `optipagos-frontend` |
| `https://optimype.optus.lat` | Optimype, agentes de IA para MYPES | `optimype-frontend` |

## Puesta en marcha

Requisitos: Node ≥ 20.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

`NEXT_PUBLIC_SITE_URL` (opcional) cambia la URL pública que usan los metadatos, el sitemap y
`robots.txt`; por defecto es `https://optus.lat`.

> Next.js 16 trae cambios respecto a versiones anteriores (por ejemplo, `proxy.ts` en lugar de
> `middleware.ts`). Antes de tocar el código, revisa la guía correspondiente en
> `node_modules/next/dist/docs/` (ver `AGENTS.md`).

## Estructura

```
app/[lang]/            páginas (portada, privacy, terms, 404); el layout raíz vive aquí
app/globals.css        sistema visual: paleta, tipografía, componentes y animaciones
proxy.ts               idiomas: qué URL muestra qué versión
i18n/                  idiomas admitidos y diccionarios (es.ts, en.ts)
components/brand/      logotipos (paths.ts se genera con `npm run brand`)
components/three/      escena WebGL de la portada (three.js)
components/sections/   secciones de la portada
components/ui/         piezas reutilizables (apariciones, cinta, píxeles, barras…)
lib/site.ts            datos de Optus: contacto, redes, productos, enlaces de los programas
assets/                tipografías, vectores originales, referencias e imágenes de los programas
public/og/             tarjetas de vista previa (Open Graph) por idioma
```

## Idiomas

El sitio está en **español** (por defecto) e **inglés**.

| Página | Español | Inglés |
| --- | --- | --- |
| Portada | `/` | `/en` |
| Privacidad | `/privacidad` | `/en/privacy` |
| Términos | `/terminos` | `/en/terms` |

- Todas las páginas viven en `app/[lang]/…` y se generan de forma estática para cada idioma.
- `proxy.ts` sirve el español sin prefijo, redirige la primera visita según el idioma del
  navegador y recuerda la elección en la cookie `lang` (los enlaces del selector de idioma llevan
  el prefijo `/es/…` o `/en/…` para que funcione sin JavaScript).
- Los textos están en `i18n/dictionaries/es.ts` y `en.ts`. El tipo `Dictionary` sale del español,
  así que TypeScript avisa si a la traducción le falta una clave.
- Para añadir un idioma: súmalo a `locales` y `localeTags` en `i18n/config.ts`, crea su
  diccionario, regístralo en `i18n/dictionaries.ts` y contempla su prefijo en `proxy.ts`.

## Identidad

- **Paleta** (de `assets/inspo`): azul `#0c33e5`, tinta `#0d0d10`, papel `#eeefee` y amarillo
  `#dbc800` como acento. Están declarados en `app/globals.css` (`@theme`).
- **Tipografía**: Archivo (ancha y pesada para los títulos) y Geist Mono para los rótulos, ambas
  de Google Fonts.
- **Logotipo**: la marca (`assets/logos/optus_logo_vec.svg`) más «OPTUS» en Varela Round en
  mayúsculas. Varela Round solo tiene peso Regular, así que `scripts/build-brand.mjs` iguala el
  grosor de la letra al del trazo de la marca (46,25 u) escalando el tipo y añadiéndole un
  contorno; el resultado se guarda trazado en `components/brand/paths.ts`, sin depender de que la
  fuente cargue. Tras cambiar un vector o una tipografía: `npm run brand`.
- **Productos**: cada uno conserva su identidad dentro del marco de Optus. Optipagos usa su
  pajarito y Baumans; Optimype mantiene, de momento, el logotipo y los colores de su sitio actual.

## Movimiento

- **three.js** (`components/three/scene.ts`): la marca extruida como un tubo cromado y reducida
  a dos tintas con una trama de Bayer, flotando en un campo de píxeles. Se carga aparte, se pausa
  fuera de pantalla y, sin WebGL, queda la marca en 2D.
- **2D estático**: composiciones de cuadrados (`Pixels`, `PixelEdge`), barras de luz (`Bars`) y
  grano de imprenta (`.grain`).
- **Transiciones**: apariciones al hacer scroll (`Reveal`), el texto que se enciende al leerlo
  (`ScrollWords`) y la transición entre páginas con `<ViewTransition>` de React.
- Todo respeta `prefers-reduced-motion`.

## Reconocimientos

Los datos están en `i18n/dictionaries/*` (textos) y `lib/site.ts` (enlaces); las imágenes, en
`assets/awards/`. Los logotipos y carteles pertenecen a sus titulares y se muestran solo para
identificar cada programa:

- Hack2Build: Payments x402 · Avalanche (2.º lugar)
- Incubadora de Empresas CIDES-UMSA (finalistas)
- Incuba Unión Tecnológico 3.0 · Banco Unión y Fundación Emprender Futuro (seleccionados)

## Despliegue

Vercel, proyecto `optus-main-frontend`, con los dominios `optus.lat` y `www.optus.lat`.

```bash
vercel --prod
```
