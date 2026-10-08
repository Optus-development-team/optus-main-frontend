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
      { id: "equipo", label: "El Equipo" },
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
    lead: "Somos los creadores de Optipagos y Optimype. Diseñamos productos que transforman a WhatsApp en la única herramienta que tu negocio necesita para cobrar, vender y operar todos los días, sin aplicaciones nuevas ni complicaciones.",
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
    "Finalistas · CIDE-UMSA",
    "Incuba Unión Tecnológico 3.0",
    "Impulsados por el DEIU",
    "Hecho en Bolivia",
  ],
  about: {
    label: "Nosotros",
    statement:
      "Optus es la startup tecnológica boliviana detrás de *Optipagos* y *Optimype*. Creemos firmemente que la mejor tecnología es la que ya sabes usar; por eso, convertimos el chat de WhatsApp en el centro de operaciones para tu negocio.",
    principlesTitle: "Nuestra filosofía",
    principles: [
      {
        title: "Acción sobre teoría",
        text: "Construimos, probamos y mejoramos rápido, colaborando de cerca con personas y negocios reales.",
      },
      {
        title: "Simplicidad radical",
        text: "La interfaz perfecta es la que ya dominas. Si no se puede hacer desde WhatsApp, aún no está listo.",
      },
      {
        title: "Automatización real",
        text: "No se trata de simples bots conversacionales. Nuestros agentes cobran, agendan y ejecutan.",
      },
      {
        title: "Pensamiento a escala",
        text: "La solución que hoy le simplifica la vida a tu negocio, mañana debe poder escalar a miles.",
      },
    ],
    stats: [
      { value: "02", label: "productos en el mercado" },
      { value: "04", label: "reconocimientos destacados" },
      { value: "01", label: "plataforma central: WhatsApp" },
      { value: "BO", label: "talento hecho en La Paz" },
    ],
  },
  products: {
    label: "Productos",
    title: ["Dos soluciones,", "un mismo canal."],
    lead: "Cada una de nuestras marcas resuelve un desafío distinto, pero ambas habitan el espacio digital que tus clientes ya usan: WhatsApp.",
    techLabel: "Stack Tecnológico",
    visit: "Visitar",
    items: {
      optipagos: {
        category: "Billetera digital en WhatsApp",
        tagline: "Tu dinero viaja a la velocidad de un mensaje",
        description:
          "Envía, recibe y cobra dólares digitales simplemente chateando. No requiere instalar aplicaciones adicionales y cada operación se valida con tu huometría: tú mantienes el control absoluto de tus fondos.",
        points: ["Billetera de autocustodia total", "Generación de cobros con código QR", "Confirmación mediante huella o reconocimiento facial"],
        chat: ["enviar 20 a Ana", "Transacción exitosa. Enviaste 20 USD a Ana."],
      },
      optimype: {
        category: "Agentes de IA para MYPES",
        tagline: "El asistente ideal que atiende, vende y cobra en piloto automático",
        description:
          "Agentes impulsados por inteligencia artificial diseñados para atender a tus clientes, programar citas, cerrar ventas y cobrar por WhatsApp las 24 horas del día. Creado especialmente para potenciar micro y pequeñas empresas sin requerir configuraciones técnicas.",
        points: ["Disponibilidad 24/7 ininterrumpida", "Cierre de ventas y cobros dentro del chat", "Gestión de inventario y analíticas"],
        chat: ["¿Tienen disponible el modelo en azul?", "Sí, nos quedan 4 unidades. ¿Deseas que te reserve uno?"],
      },
    },
  },
  awards: {
    label: "Reconocimientos",
    title: ["Lo que hemos", "logrado hasta ahora."],
    lead: "Las instituciones y competencias que respaldan nuestra visión tecnológica.",
    more: "Conocer más",
    items: {
      hack2build: {
        badge: "2.º lugar global",
        title: "Hack2Build: Payments x402",
        org: "Avalanche · Hackathon Mundial",
        year: "2025",
        description:
          "Subcampeones en el hackathon global de Avalanche, donde desarrolladores de todo el mundo compitieron construyendo la próxima generación de pagos interconectando IA y blockchain a través del protocolo x402.",
        alt: "Cartel del hackathon Hack2Build: Payments x402 de Avalanche",
      },
      cides: {
        badge: "Ganadores",
        title: "Incubadora de Empresas CIDE UMSA",
        org: "INNOVA San Andrés 6.0",
        year: "La Paz",
        description:
          "Equipo ganador del proceso de incubación en el Concurso INNOVA San Andrés Bicentenario 6.0 junto a la Incubadora CIDE UMSA, reconociendo el potencial y la innovación de Optus.",
        alt: "Logotipo oficial de la Incubadora de Empresas CIDE UMSA",
      },
      incuba: {
        badge: "Seleccionados",
        title: "Incuba Unión Tecnológico 3.0",
        org: "Banco Unión · Fundación Emprender Futuro",
        year: "2026",
        description:
          "Seleccionados para integrar la incubadora de negocios tecnológicos de Banco Unión y Fundación Emprender Futuro, accediendo a programas intensivos de aceleración, mentoría y financiamiento.",
        alt: "Logotipo de Incuba Unión 3.0, incubadora de negocios tecnológicos",
      },
      deiu: {
        badge: "Impulsados",
        title: "Departamento de Emprendimiento e Innovación Universitaria",
        org: "DEIU · UMSA",
        year: "La Paz",
        description:
          "Impulsados y acompañados activamente por el DEIU de la Universidad Mayor de San Andrés, fortaleciendo el desarrollo y la proyección de soluciones tecnológicas bolivianas.",
        alt: "Logotipo oficial de DEIU UMSA",
      },
    },
  },
  team: {
    label: "El Equipo",
    title: ["Quiénes", "somos."],
    lead: "Un grupo de desarrolladores apasionados por crear tecnología útil desde Bolivia para el mundo.",
    roles: {
      erick: "Desarrollador de Software",
      fabricio: "Desarrollador de Software",
      franco: "Desarrollador de Software",
      saul: "Desarrollador de Software",
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
