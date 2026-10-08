import type { Dictionary } from "./es";

const en: Dictionary = {
  meta: {
    title: "Optus · Bolivian technology that does the work for you",
    description:
      "Optus is the Bolivian company behind Optipagos and Optimype: products that turn WhatsApp into the tool for paying, selling and running a business.",
    keywords: [
      "Optus",
      "Optipagos",
      "Optimype",
      "Bolivian startup",
      "WhatsApp payments",
      "AI agents for small businesses",
      "technology Bolivia",
      "La Paz",
    ],
    ogAlt: "Optus, the company behind Optipagos and Optimype",
  },
  nav: {
    label: "Main navigation",
    home: "Optus, home",
    items: [
      { id: "products", label: "Products" },
      { id: "awards", label: "Recognition" },
      { id: "about", label: "About" },
      { id: "team", label: "The Team" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Optus · La Paz, Bolivia",
    title: ["Optus does,", "you move."],
    lead: "We are the creators behind Optipagos and Optimype. We design products that transform WhatsApp into the only tool your business needs to collect payments, sell, and operate every day—without new apps or complications.",
    ctaPrimary: "See products",
    ctaSecondary: "Let's talk",
    badge: "Home of Optipagos + Optimype",
    localTime: "Time in La Paz",
    scroll: "Scroll",
  },
  ticker: [
    "Optipagos",
    "Optimype",
    "2nd place · Avalanche Hack2Build: Payments x402",
    "Finalists · CIDE-UMSA Business Incubator",
    "Incuba Unión Tecnológico 3.0",
    "Powered by DEIU",
    "Made in Bolivia",
  ],
  about: {
    label: "About",
    statement:
      "Optus is the Bolivian tech startup behind *Optipagos* and *Optimype*. We firmly believe the best technology is the one you already know how to use; that's why we turn your WhatsApp chat into the central hub for your business.",
    principlesTitle: "Our philosophy",
    principles: [
      {
        title: "Action over theory",
        text: "We build, test, and improve fast, working closely with real people and real businesses.",
      },
      {
        title: "Radical simplicity",
        text: "The perfect interface is the one you already master. If it can't be done from WhatsApp, it isn't ready.",
      },
      {
        title: "Real automation",
        text: "It's not just about conversational bots. Our agents charge, schedule, and execute.",
      },
      {
        title: "Thinking at scale",
        text: "The solution that simplifies life for one business today must scale to thousands tomorrow.",
      },
    ],
    stats: [
      { value: "02", label: "live products" },
      { value: "04", label: "major recognitions" },
      { value: "01", label: "core platform: WhatsApp" },
      { value: "BO", label: "talent made in La Paz" },
    ],
  },
  products: {
    label: "Products",
    title: ["Two solutions,", "one channel."],
    lead: "Each of our brands solves a different challenge, but both live in the digital space your customers already use: WhatsApp.",
    techLabel: "Tech Stack",
    visit: "Visit",
    items: {
      optipagos: {
        category: "A digital wallet in WhatsApp",
        tagline: "Your money travels at the speed of a message",
        description:
          "Send, receive, and collect digital dollars simply by chatting. No need to install additional apps, and every operation is validated with your biometrics: you keep absolute control over your funds.",
        points: ["Full self-custody wallet", "QR code payment generation", "Fingerprint or facial recognition confirmation"],
        chat: ["send 20 to Ana", "Transaction successful. You sent 20 USD to Ana."],
      },
      optimype: {
        category: "AI agents for small businesses",
        tagline: "The ideal assistant that serves, sells, and collects on autopilot",
        description:
          "AI-powered agents designed to serve your customers, schedule appointments, close sales, and collect payments over WhatsApp 24/7. Built specifically to empower micro and small businesses without requiring technical setups.",
        points: ["Uninterrupted 24/7 availability", "In-chat sales and payment processing", "Inventory management and analytics"],
        chat: ["Do you have the blue model in stock?", "Yes, we have 4 units left. Would you like me to reserve one?"],
      },
    },
  },
  awards: {
    label: "Recognition",
    title: ["What we have", "achieved so far."],
    lead: "The institutions and competitions backing our technological vision.",
    more: "Learn more",
    items: {
      hack2build: {
        badge: "2nd place global",
        title: "Hack2Build: Payments x402",
        org: "Avalanche · Global Hackathon",
        year: "2025",
        description:
          "Runners-up in Avalanche's global hackathon, where developers from around the world competed to build the next generation of payments connecting AI and blockchain via the x402 protocol.",
        alt: "Poster of Avalanche's Hack2Build: Payments x402 hackathon",
      },
      cides: {
        badge: "Winners",
        title: "CIDE UMSA Business Incubator",
        org: "INNOVA San Andrés 6.0",
        year: "La Paz",
        description:
          "Winning team of the incubation process in the INNOVA San Andrés Bicentenario 6.0 Competition alongside the CIDE UMSA Incubator, recognizing Optus's scalability and innovation.",
        alt: "Official logo of CIDE UMSA Business Incubator",
      },
      incuba: {
        badge: "Selected",
        title: "Incuba Unión Tecnológico 3.0",
        org: "Banco Unión · Fundación Emprender Futuro",
        year: "2026",
        description:
          "Selected to join the technology business incubator run by Banco Unión and Fundación Emprender Futuro, gaining access to intensive acceleration, mentoring, and funding programs.",
        alt: "Incuba Unión 3.0 logo, technology business incubator",
      },
      deiu: {
        badge: "Powered by",
        title: "Department of University Entrepreneurship and Innovation",
        org: "DEIU · UMSA",
        year: "La Paz",
        description:
          "Actively supported and accompanied by DEIU from Universidad Mayor de San Andrés, strengthening the development and projection of Bolivian technology solutions.",
        alt: "Official logo of DEIU UMSA",
      },
    },
  },
  team: {
    label: "The Team",
    title: ["Who", "we are."],
    lead: "A group of passionate developers creating useful technology from Bolivia for the world.",
    roles: {
      erick: "Software Developer",
      fabricio: "Software Developer",
      franco: "Software Developer",
      saul: "Software Developer",
    },
  },
  contact: {
    label: "Contact",
    title: "Let's talk.",
    lead: "Have a business, an idea or a partnership in mind? Write to us and we will get back to you soon.",
    email: "Email",
    whatsapp: "WhatsApp",
    location: "Location",
    locationValue: "La Paz, Bolivia",
    coordinates: "16.4897° S · 68.1193° W",
    social: "Social",
    socialAria: "Optus on {name}",
  },
  footer: {
    tagline: "Bolivian technology that does the work for you.",
    products: "Products",
    company: "Company",
    legal: "Legal",
    privacy: "Privacy policy",
    terms: "Terms of service",
    rights: "All rights reserved.",
    madeIn: "Made in La Paz, Bolivia",
    backToTop: "Back to top",
  },
  notFound: {
    code: "404",
    title: "This page doesn't exist.",
    text: "The link may be broken or the page may have moved.",
    back: "Back to home",
  },
  legal: {
    updated: "Last updated",
    updatedDate: "October 6, 2026",
    index: "Contents",
    back: "Back to home",
    privacy: {
      title: "Privacy policy",
      description: "What data Optus processes on optus.lat, what it is used for and how to exercise your rights.",
      intro:
        "At Optus we look after your information. This policy explains what data we process when you visit optus.lat or write to us, what we use it for and what you can do about it.",
      sections: [
        {
          title: "Who we are",
          body: [
            "Optus is a technology company based in La Paz, Bolivia, responsible for this site and for the Optipagos and Optimype brands.",
            "For any privacy question you can write to us at optus.aut@gmail.com.",
          ],
        },
        {
          title: "What this policy covers",
          body: [
            "This policy applies to the optus.lat site. Optipagos (optipagos.optus.lat) and Optimype (optimype.optus.lat) have their own privacy policies, which describe the data each product processes.",
          ],
        },
        {
          title: "What data we process",
          body: ["This is an informational site: it has no user accounts and no forms. We only process:"],
          list: [
            "The data you give us when you contact us by email, WhatsApp or social media: your name, your number or email address and the content of your message.",
            "Basic technical data about your visit (IP address, browser type, pages requested, date and time), which our hosting provider logs to operate and protect the site.",
            "Your language preference, stored in your browser.",
          ],
        },
        {
          title: "What we use it for",
          list: [
            "Answering your enquiries and following up on the conversations you start with us.",
            "Showing the site in your language, keeping it running and protecting it against misuse.",
            "Meeting the legal obligations that apply to us.",
          ],
          after: ["We do not sell your data or use it for advertising."],
        },
        {
          title: "Cookies",
          body: [
            "We use a single first-party cookie, called “lang”, which remembers the language you chose for one year. We do not use advertising cookies or third-party tracking or analytics tools.",
          ],
        },
        {
          title: "Who we share it with",
          body: ["Only with the providers we need in order to operate, which process data on our behalf:"],
          list: [
            "Vercel, which hosts the site.",
            "Meta (WhatsApp) and Google (email), when you choose to write to us through those channels.",
            "Competent authorities, when a law or a valid order requires it.",
          ],
        },
        {
          title: "How long we keep it",
          body: [
            "We keep your messages for as long as needed to handle your enquiry and for a reasonable period afterwards, unless the law requires longer. Technical logs are kept for the period applied by our hosting provider.",
          ],
        },
        {
          title: "Your rights",
          body: [
            "You can ask us to access, correct or delete your data, or object to its use, by writing to optus.aut@gmail.com. We will reply within a reasonable time and, if necessary, ask you to confirm your identity.",
          ],
        },
        {
          title: "Security",
          body: [
            "The site is always served over an encrypted connection (HTTPS) and we apply reasonable measures to protect information. No system is infallible, so we recommend not sending us sensitive data that isn't necessary.",
          ],
        },
        {
          title: "Links to other sites",
          body: [
            "This site links to our products, to social networks and to the pages of the programs that have recognised us. Each of those sites has its own privacy policy.",
          ],
        },
        {
          title: "Minors",
          body: ["This site is not aimed at minors and we do not knowingly collect their data."],
        },
        {
          title: "Changes to this policy",
          body: [
            "We may update this policy to reflect changes to the site or to regulations. We will publish the current version here with its update date.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of service",
      description: "The conditions that govern the use of the optus.lat site.",
      intro:
        "These terms govern the use of optus.lat. By browsing the site you accept these conditions; if you do not agree, please do not use it.",
      sections: [
        {
          title: "About Optus and this site",
          body: [
            "Optus is a technology company based in La Paz, Bolivia. This site presents the company, its products (Optipagos and Optimype) and the recognition it has received.",
          ],
        },
        {
          title: "Our products",
          body: [
            "Optipagos and Optimype are offered on their own sites and are governed by their own terms and policies. The information shown here is general and is neither a binding offer nor financial, legal or tax advice.",
          ],
        },
        {
          title: "Permitted use",
          body: ["You may use the site to learn about us and to contact us. You may not:"],
          list: [
            "Use it in a way that affects its operation or security, or try to access non-public areas.",
            "Impersonate Optus or its brands, or suggest a relationship that does not exist.",
            "Copy the content for commercial purposes without our written permission.",
          ],
        },
        {
          title: "Intellectual property",
          body: [
            "The names Optus, Optipagos and Optimype, their logos, texts, designs and code belong to Optus or are used with permission.",
            "Third-party trademarks and logos (for example, those of the programs and competitions that have recognised us) belong to their owners and appear only to identify those programs.",
          ],
        },
        {
          title: "Third-party links",
          body: [
            "The site contains links to pages we do not control. We are not responsible for their content or practices; review their conditions before using them.",
          ],
        },
        {
          title: "Availability and liability",
          body: [
            "We work to keep the information correct and the site available, but it is provided “as is”, with no guarantee of continuous availability or freedom from errors. To the extent permitted by law, Optus is not liable for damages arising from the use of the site or the inability to use it.",
          ],
        },
        {
          title: "Changes",
          body: [
            "We may modify the site and these terms at any time. The current version is the one published here, with its update date.",
          ],
        },
        {
          title: "Governing law",
          body: [
            "These terms are governed by the laws of the Plurinational State of Bolivia. Any dispute will be submitted to the competent courts of the city of La Paz.",
          ],
        },
        {
          title: "Contact",
          body: ["If you have questions about these terms, write to us at optus.aut@gmail.com."],
        },
      ],
    },
  },
};

export default en;
