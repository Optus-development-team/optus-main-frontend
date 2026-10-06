/**
 * Textos en español (idioma por defecto). en.ts debe tener exactamente la misma forma:
 * el tipo `Dictionary` sale de este archivo.
 *
 * En `about.statement` las palabras entre *asteriscos* se resaltan.
 */
const es = {
  meta: {
    title: "Optus · Tecnología boliviana que trabaja por ti",
    description:
      "Optus es la empresa boliviana detrás de Optipagos y Optimype: productos que convierten WhatsApp en la herramienta para pagar, vender y operar un negocio.",
    keywords: [
      "Optus",
      "Optipagos",
      "Optimype",
      "startup boliviana",
      "pagos por WhatsApp",
      "agentes de IA para MYPES",
      "tecnología Bolivia",
      "La Paz",
    ],
    ogAlt: "Optus, la empresa detrás de Optipagos y Optimype",
  },
  nav: {
    label: "Navegación principal",
    home: "Optus, inicio",
    items: [
      { id: "productos", label: "Productos" },
      { id: "reconocimientos", label: "Reconocimientos" },
      { id: "nosotros", label: "Nosotros" },
      { id: "contacto", label: "Contacto" },
    ],
    cta: "Hablemos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Optus · La Paz, Bolivia",
    title: ["Optus hace,", "tú avanzas."],
    lead: "Somos la empresa detrás de Optipagos y Optimype. Construimos productos que convierten WhatsApp en la herramienta para pagar, vender y operar un negocio, sin apps nuevas y sin enredos.",
    ctaPrimary: "Ver productos",
    ctaSecondary: "Hablemos",
    badge: "Matriz de Optipagos + Optimype",
    localTime: "Hora en La Paz",
    scroll: "Desliza",
  },
  ticker: [
    "Optipagos",
    "Optimype",
    "2.º lugar · Hack2Build: Payments x402 de Avalanche",
    "Finalistas · Incubadora de Empresas CIDES-UMSA",
    "Incuba Unión Tecnológico 3.0",
    "Hecho en Bolivia",
  ],
  about: {
    label: "Nosotros",
    statement:
      "Optus es el equipo boliviano detrás de *Optipagos* y *Optimype*. Creemos que la mejor tecnología es la que ya sabes usar: por eso llevamos los pagos, las ventas y la operación de un negocio al chat de todos los días.",
    principlesTitle: "Cómo trabajamos",
    principles: [
      {
        title: "Acción sobre teoría",
        text: "Construimos, probamos y mejoramos rápido, con personas y negocios reales.",
      },
      {
        title: "Simplicidad radical",
        text: "Si no se puede usar desde WhatsApp, todavía no está listo.",
      },
      {
        title: "Automatización real",
        text: "No basta con responder: hay que ejecutar. Cobrar, agendar, pagar.",
      },
      {
        title: "Pensamiento a escala",
        text: "Lo que hoy le sirve a un negocio mañana debe servirle a miles.",
      },
    ],
    stats: [
      { value: "02", label: "productos en marcha" },
      { value: "03", label: "reconocimientos" },
      { value: "01", label: "canal: WhatsApp" },
      { value: "BO", label: "hecho en La Paz" },
    ],
  },
  products: {
    label: "Productos",
    title: ["Dos productos,", "un mismo canal."],
    lead: "Cada marca resuelve un problema distinto. Las dos viven donde ya está la gente: en WhatsApp.",
    techLabel: "Tecnologías",
    visit: "Visitar",
    items: {
      optipagos: {
        category: "Billetera en WhatsApp",
        tagline: "Tu plata viaja por WhatsApp",
        description:
          "Envía, recibe y cobra dólares digitales chateando. Sin instalar nada y con cada operación confirmada con tu huella: la clave siempre es tuya.",
        points: ["Billetera de autocustodia", "Cobros con QR", "Confirmación con huella o rostro"],
        chat: ["enviar 20 a Ana", "Listo. Enviaste 20 USD a Ana."],
      },
      optimype: {
        category: "Agentes de IA para MYPES",
        tagline: "Tu negocio atiende, vende y cobra solo",
        description:
          "Agentes de inteligencia artificial que atienden a tus clientes, agendan citas, venden y cobran por WhatsApp a toda hora. Pensado para micro y pequeñas empresas, sin configuraciones complejas.",
        points: ["Atención las 24 horas", "Ventas y cobros por chat", "Inventario y reportes"],
        chat: ["¿Tienen stock del modelo azul?", "Sí, quedan 4. ¿Te reservo uno?"],
      },
    },
  },
  awards: {
    label: "Reconocimientos",
    title: ["Lo que hemos", "logrado hasta ahora."],
    lead: "Programas y competencias que validaron lo que construimos.",
    more: "Conocer el programa",
    items: {
      hack2build: {
        badge: "2.º lugar",
        title: "Hack2Build: Payments x402",
        org: "Avalanche · hackathon global",
        year: "2025",
        description:
          "Segundo lugar en el hackathon global de Avalanche sobre pagos con el protocolo x402, donde equipos de todo el mundo construyeron la próxima generación de pagos entre IA y blockchain.",
        alt: "Cartel del hackathon Hack2Build: Payments x402 de Avalanche",
      },
      cides: {
        badge: "Finalistas",
        title: "Incubadora de Empresas CIDES-UMSA",
        org: "Universidad Mayor de San Andrés",
        year: "La Paz",
        description:
          "Finalistas de la incubadora de empresas del CIDES, el postgrado en Ciencias del Desarrollo de la Universidad Mayor de San Andrés.",
        alt: "Logotipo del CIDES-UMSA",
      },
      incuba: {
        badge: "Seleccionados",
        title: "Incuba Unión Tecnológico 3.0",
        org: "Banco Unión · Fundación Emprender Futuro",
        year: "2026",
        description:
          "Aceptados en la incubadora de negocios tecnológicos de Banco Unión y Fundación Emprender Futuro: formación, hackathon, bootcamp y mentorías para startups bolivianas.",
        alt: "Logotipo de Incuba Unión 3.0, incubadora de negocios tecnológicos",
      },
    },
  },
  contact: {
    label: "Contacto",
    title: "Hablemos.",
    lead: "¿Tienes un negocio, una idea o una alianza en mente? Escríbenos y te respondemos pronto.",
    email: "Correo",
    whatsapp: "WhatsApp",
    location: "Ubicación",
    locationValue: "La Paz, Bolivia",
    coordinates: "16.4897° S · 68.1193° O",
    social: "Redes",
    socialAria: "Optus en {name}",
  },
  footer: {
    tagline: "Tecnología boliviana que trabaja por ti.",
    products: "Productos",
    company: "Empresa",
    legal: "Legal",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    rights: "Todos los derechos reservados.",
    madeIn: "Hecho en La Paz, Bolivia",
    backToTop: "Volver arriba",
  },
  notFound: {
    code: "404",
    title: "Esta página no existe.",
    text: "Puede que el enlace esté roto o que la página se haya movido.",
    back: "Volver al inicio",
  },
  legal: {
    updated: "Última actualización",
    updatedDate: "6 de octubre de 2026",
    index: "Contenido",
    back: "Volver al inicio",
    privacy: {
      title: "Política de privacidad",
      description:
        "Qué datos trata Optus en optus.lat, para qué los usa y cómo puedes ejercer tus derechos.",
      intro:
        "En Optus cuidamos tu información. Esta política explica qué datos tratamos cuando visitas optus.lat o nos escribes, para qué los usamos y qué puedes hacer al respecto.",
      sections: [
        {
          title: "Quiénes somos",
          body: [
            "Optus es una empresa de tecnología con sede en La Paz, Bolivia, responsable de este sitio y de las marcas Optipagos y Optimype.",
            "Para cualquier consulta sobre privacidad puedes escribirnos a optus.aut@gmail.com.",
          ],
        },
        {
          title: "A qué se aplica esta política",
          body: [
            "Esta política se aplica al sitio optus.lat. Optipagos (optipagos.optus.lat) y Optimype (optimype.optus.lat) tienen sus propias políticas de privacidad, que describen los datos que trata cada producto.",
          ],
        },
        {
          title: "Qué datos tratamos",
          body: ["Este sitio es informativo: no tiene cuentas de usuario ni formularios. Tratamos solo:"],
          list: [
            "Los datos que nos das al contactarnos por correo, WhatsApp o redes sociales: tu nombre, tu número o correo y el contenido de tu mensaje.",
            "Datos técnicos básicos de la visita (dirección IP, tipo de navegador, páginas solicitadas, fecha y hora), que nuestro proveedor de alojamiento registra para operar y proteger el sitio.",
            "Tu preferencia de idioma, guardada en tu navegador.",
          ],
        },
        {
          title: "Para qué los usamos",
          list: [
            "Responder tus consultas y dar seguimiento a las conversaciones que inicies con nosotros.",
            "Mostrar el sitio en tu idioma, mantenerlo en funcionamiento y protegerlo frente a usos indebidos.",
            "Cumplir las obligaciones legales que nos correspondan.",
          ],
          after: ["No vendemos tus datos ni los usamos para publicidad."],
        },
        {
          title: "Cookies",
          body: [
            "Usamos una sola cookie propia, llamada «lang», que recuerda el idioma que elegiste durante un año. No usamos cookies de publicidad ni herramientas de seguimiento o analítica de terceros.",
          ],
        },
        {
          title: "Con quién los compartimos",
          body: ["Solo con los proveedores que necesitamos para operar, que tratan los datos por encargo nuestro:"],
          list: [
            "Vercel, que aloja el sitio.",
            "Meta (WhatsApp) y Google (correo), cuando decides escribirnos por esos canales.",
            "Autoridades competentes, cuando una norma o una orden válida nos obligue.",
          ],
        },
        {
          title: "Cuánto tiempo los conservamos",
          body: [
            "Conservamos tus mensajes el tiempo necesario para atender tu consulta y por un periodo razonable después, salvo que la ley exija un plazo mayor. Los registros técnicos se conservan durante el plazo que aplica nuestro proveedor de alojamiento.",
          ],
        },
        {
          title: "Tus derechos",
          body: [
            "Puedes pedirnos acceder a tus datos, corregirlos, eliminarlos u oponerte a su uso escribiendo a optus.aut@gmail.com. Te responderemos en un plazo razonable y, si hace falta, te pediremos confirmar tu identidad.",
          ],
        },
        {
          title: "Seguridad",
          body: [
            "El sitio se sirve siempre por una conexión cifrada (HTTPS) y aplicamos medidas razonables para proteger la información. Ningún sistema es infalible, así que te recomendamos no enviarnos datos sensibles que no sean necesarios.",
          ],
        },
        {
          title: "Enlaces a otros sitios",
          body: [
            "Este sitio enlaza a nuestros productos, a redes sociales y a las páginas de los programas que nos han reconocido. Cada uno de esos sitios tiene su propia política de privacidad.",
          ],
        },
        {
          title: "Menores de edad",
          body: ["Este sitio no está dirigido a menores de edad y no recopilamos sus datos a sabiendas."],
        },
        {
          title: "Cambios en esta política",
          body: [
            "Podemos actualizar esta política para reflejar cambios en el sitio o en la normativa. Publicaremos aquí la versión vigente con su fecha de actualización.",
          ],
        },
      ],
    },
    terms: {
      title: "Términos de servicio",
      description: "Las condiciones que rigen el uso del sitio optus.lat.",
      intro:
        "Estos términos regulan el uso de optus.lat. Al navegar por el sitio aceptas estas condiciones; si no estás de acuerdo, te pedimos no usarlo.",
      sections: [
        {
          title: "Sobre Optus y este sitio",
          body: [
            "Optus es una empresa de tecnología con sede en La Paz, Bolivia. Este sitio presenta a la empresa, sus productos (Optipagos y Optimype) y los reconocimientos que ha recibido.",
          ],
        },
        {
          title: "Nuestros productos",
          body: [
            "Optipagos y Optimype se ofrecen en sus propios sitios y se rigen por sus propios términos y políticas. La información que aparece aquí es general y no constituye una oferta vinculante ni asesoría financiera, legal o tributaria.",
          ],
        },
        {
          title: "Uso permitido",
          body: ["Puedes usar el sitio para informarte y contactarnos. No está permitido:"],
          list: [
            "Usarlo de forma que afecte su funcionamiento o su seguridad, o intentar acceder a áreas no públicas.",
            "Suplantar a Optus o a sus marcas, o dar a entender una relación que no existe.",
            "Copiar el contenido con fines comerciales sin nuestra autorización por escrito.",
          ],
        },
        {
          title: "Propiedad intelectual",
          body: [
            "Los nombres Optus, Optipagos y Optimype, sus logotipos, textos, diseños y código pertenecen a Optus o se usan con permiso.",
            "Las marcas y logotipos de terceros (por ejemplo, de los programas y competencias que nos han reconocido) pertenecen a sus titulares y aparecen únicamente para identificar esos programas.",
          ],
        },
        {
          title: "Enlaces a terceros",
          body: [
            "El sitio contiene enlaces a páginas que no controlamos. No somos responsables de su contenido ni de sus prácticas; revisa sus condiciones antes de usarlas.",
          ],
        },
        {
          title: "Disponibilidad y responsabilidad",
          body: [
            "Trabajamos para que la información sea correcta y el sitio esté disponible, pero se ofrece «tal cual», sin garantías de disponibilidad continua ni de ausencia de errores. En la medida que la ley lo permita, Optus no responde por daños derivados del uso del sitio o de la imposibilidad de usarlo.",
          ],
        },
        {
          title: "Cambios",
          body: [
            "Podemos modificar el sitio y estos términos en cualquier momento. La versión vigente es la publicada aquí, con su fecha de actualización.",
          ],
        },
        {
          title: "Ley aplicable",
          body: [
            "Estos términos se rigen por las leyes del Estado Plurinacional de Bolivia. Cualquier controversia se someterá a los tribunales competentes de la ciudad de La Paz.",
          ],
        },
        {
          title: "Contacto",
          body: ["Si tienes preguntas sobre estos términos, escríbenos a optus.aut@gmail.com."],
        },
      ],
    },
  },
};

export default es;
export type Dictionary = typeof es;
