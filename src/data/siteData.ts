import {
  heroStudio,
  logoDark,
  logoLight,
  logoMono,
  projectAtopicaClinimetria,
  projectBlogSaludAstro,
  projectFichioHce,
  projectMedicinaEstiloVida,
  projectMindskinWeb,
  projectRustTauriDesktop,
  projectSimplexEcommerce,
  projectVitaltrackClinical,
  serviceDockerInfra,
} from '../assets';

export const WHATSAPP_NUMBER_DISPLAY = '+54 9 343 471-8183';
export const WHATSAPP_NUMBER_E164 = '5493434718183';
export const CONTACT_EMAIL = 'adiseniar@gmail.com';
export const BRAND_LOGO_LIGHT = logoLight;
export const BRAND_LOGO_DARK = logoDark;
export const BRAND_LOGO_MONO = logoMono;

export function buildWhatsAppUrl(message?: string): string {
  const defaultMsg =
    'Hola ADISENIAR, me gustaría consultar por un proyecto de desarrollo o diseño.';
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(message || defaultMsg)}`;
}

export interface ServiceItem {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  spanClass: string;
  image?: string;
  imageAlt?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    index: '01.',
    title: 'Desarrollo Web & Aplicaciones Full-Stack',
    subtitle: 'React · TypeScript · APIs REST · SEO Técnico',
    description:
      'Construcción de aplicaciones web rápidas, interfaces claras y plataformas de gestión a medida con enfoque en rendimiento real, accesibilidad y posicionamiento orgánico.',
    deliverables: [
      'Sitios y SPAs ultrarrápidos con Vite, React y Tailwind CSS',
      'Arquitectura backend limpia, bases de datos y autenticación',
      'Optimización Core Web Vitals, metadatos y Schema.org',
    ],
    spanClass: 'lg:col-span-2',
  },
  {
    index: '02.',
    title: 'Escritorio Nativo con Rust y Tauri',
    subtitle: 'Rust · Tauri · SQLite · Multiplataforma',
    description:
      'Software de escritorio compacto y seguro en memoria para Windows, macOS y Linux, con acceso directo al hardware y funcionamiento offline.',
    deliverables: [
      'Binarios livianos menores a 15 MB con mínimo uso de RAM',
      'Integración con archivos locales, impresoras y bases embebidas',
    ],
    spanClass: 'lg:col-span-1',
  },
  {
    index: '03.',
    title: 'Despliegue Cloud con Docker',
    subtitle: 'Docker · Traefik · Linux VPS',
    description:
      'Puesta en producción autónoma en servidores propios. Contenerización reproducible, certificados SSL automáticos y respaldos sin depender de PaaS costosos.',
    deliverables: [
      'Configuración integral de VPS con Docker y Docker Compose',
      'Pipelines CI/CD con despliegue continuo desde Git',
      'Monitoreo de recursos, SSL automático y copias externas',
    ],
    spanClass: 'lg:col-span-1',
    image: serviceDockerInfra,
    imageAlt:
      'Infraestructura de servidor ordenada con cableado azul marino para despliegues con Docker',
  },
  {
    index: '04.',
    title: 'Diseño Gráfico y Dirección Visual con IA',
    subtitle: 'Identidad Visual · UI/UX · Flujos Generativos',
    description:
      'Criterio gráfico profesional potenciado con herramientas de inteligencia artificial para crear identidades, piezas editoriales y sistemas visuales coherentes en tiempos ágiles.',
    deliverables: [
      'Sistemas de marca, logotipos vectoriales y guías cromáticas',
      'Producción de activos fotográficos y editoriales asistida por IA',
      'Diseño de interfaces limpias enfocadas en conversión y lectura',
    ],
    spanClass: 'lg:col-span-2',
  },
];

export type PortfolioCategory =
  'Todos' | 'Open Source' | 'Web & Cloud' | 'Escritorio Rust' | 'Diseño + IA';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'Todos'>;
  year: string;
  featured?: boolean;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  liveLabel?: string;
  image: string;
  imageAlt: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'fichio-open-source',
    title: 'Fichio — Historia Clínica Digital Local-First',
    category: 'Open Source',
    year: '2026',
    featured: true,
    summary:
      'Plataforma Open Source de Historia Clínica Digital con arquitectura local-first, diseñada para consultorios y profesionales que priorizan privacidad de datos, velocidad y operación continua sin depender de la nube.',
    challenge:
      'Los sistemas médicos tradicionales en la nube suelen presentar latencia en consulta, costos recurrentes por usuario y vulnerabilidad ante cortes de conexión, además de delegar datos clínicos sensibles a terceros.',
    solution:
      'Arquitectura local-first de código abierto: los registros clínicos se almacenan y consultan localmente con latencia cero, permitiendo trabajar sin conexión y sincronizar o autoalojar de forma segura.',
    outcome:
      'Proyecto Open Source activo en fichio.com.ar, con respuesta instantánea en consultorio, continuidad offline garantizada y soberanía total sobre cada historia clínica.',
    stack: ['Open Source', 'Local-First', 'Historia Clínica Digital', 'Offline-Ready', 'Web'],
    liveUrl: 'https://fichio.com.ar/',
    liveLabel: 'Visitar fichio.com.ar',
    image: projectFichioHce,
    imageAlt:
      'Laptop mostrando la Historia Clínica Digital local-first Fichio en escritorio minimalista',
  },
  {
    id: 'tauri-rust-pos',
    title: 'Sistema de Gestión Local en Rust & Tauri',
    category: 'Escritorio Rust',
    year: '2026',
    summary:
      'Aplicación de escritorio multiplataforma para control de inventario, facturación offline y sincronización asíncrona con servidor Docker.',
    challenge:
      'Reemplazar una aplicación heredada lenta que consumía más de 900 MB de RAM y bloqueaba terminales de trabajo con hardware modesto.',
    solution:
      'Backend local escrito en Rust con SQLite embebido y comunicación IPC segura hacia una interfaz minimalista en React + Tailwind vía Tauri.',
    outcome:
      'Instalador final de 9.4 MB, consumo en reposo de 48 MB de RAM y arranque instantáneo en menos de 0.6 segundos.',
    stack: ['Rust', 'Tauri', 'React', 'SQLite', 'IPC Seguro'],
    image: projectRustTauriDesktop,
    imageAlt:
      'Monitor de estudio mostrando interfaz de aplicación de escritorio construida con Rust y Tauri',
  },
  {
    id: 'docker-cloud-cluster',
    title: 'Migración Cloud y Orquestación con Docker',
    category: 'Web & Cloud',
    year: '2025',
    summary:
      'Consolidación de 6 servicios web, bases PostgreSQL y workers en un VPS propio con Docker, Traefik y despliegues automáticos.',
    challenge:
      'La infraestructura previa dispersa en múltiples servicios PaaS generaba costos impredecibles y demoras en cada actualización.',
    solution:
      'Estandarización mediante Dockerfiles multi-etapa, proxy inverso con TLS automático y backups cifrados programados.',
    outcome:
      'Reducción del 64% en costos mensuales de servidor y despliegues continuos en menos de 45 segundos tras cada commit.',
    stack: ['Docker', 'Docker Compose', 'Traefik', 'PostgreSQL', 'Linux VPS'],
    image: serviceDockerInfra,
    imageAlt:
      'Rack de servidores limpio con cableado estructurado para orquestación de contenedores Docker',
  },
  {
    id: 'identidad-visual-ia',
    title: 'Sistema de Identidad Visual & Catálogo con IA',
    category: 'Diseño + IA',
    year: '2026',
    summary:
      'Dirección artística, sistema tipográfico y producción fotográfica asistida por IA para lanzamiento digital de marca tecnológica.',
    challenge:
      'El cliente necesitaba lanzar su sitio y materiales comerciales en 2 semanas sin presupuesto para múltiples jornadas de estudio fotográfico.',
    solution:
      'Definición de grilla gráfica, paleta cromática controlada y generación dirigida de escenas de producto con retoque y composición manual.',
    outcome:
      'Lanzamiento en 10 días con identidad visual unificada entre web, presentaciones comerciales y piezas digitales.',
    stack: ['Diseño Gráfico', 'Dirección de Arte', 'Flujos IA', 'Figma', 'Web UI'],
    image: heroStudio,
    imageAlt: 'Estación de diseño gráfico y desarrollo con retículas geométricas en pantalla',
  },
  {
    id: 'vitaltrack-web',
    title: 'VitalTrack — Tracker de Signos Clínicos y Medicación',
    category: 'Web & Cloud',
    year: '2026',
    summary:
      'Aplicación web offline-first para el registro de signos clínicos vitales y el seguimiento diario de tomas de medicación habitual, desplegada en Cloudflare Pages.',
    challenge:
      'Permitir que pacientes y cuidadores registren presión arterial, frecuencia, temperatura y cumplimiento de medicación habitual incluso sin conexión a internet.',
    solution:
      'Arquitectura offline-first con almacenamiento local persistente en navegador, recordatorios visuales de dosis y despliegue rápido en edge con Cloudflare Pages.',
    outcome:
      'Funcionamiento inmediato sin conexión, historial clínico ordenado y sincronización fluida en dispositivos móviles y escritorio.',
    stack: ['Offline-First', 'React', 'Local Storage / IndexedDB', 'Cloudflare Pages'],
    liveUrl: 'https://vitaltrack-au5.pages.dev',
    liveLabel: 'Visitar sitio',
    image: projectVitaltrackClinical,
    imageAlt:
      'Tablet y teléfono mostrando VitalTrack con registro de signos clínicos vitales y horarios de medicación',
  },
  {
    id: 'mind-skin-web',
    title: 'Mind & Skin — Bienestar Dermatológico Integral',
    category: 'Diseño + IA',
    year: '2026',
    summary:
      'Plataforma digital enfocada en el vínculo mente-piel, combinando dirección visual serena, jerarquía tipográfica editorial y despliegue rápido.',
    challenge:
      'Transmitir rigor clínico y calma visual simultáneamente en un formato adaptable a dispositivos móviles.',
    solution:
      'Sistema de diseño editorial de alto contraste suave, activos visuales curados y publicación en Cloudflare Pages.',
    outcome:
      'Experiencia de lectura ágil y estética diferenciada orientada a consultas y difusión especializada.',
    stack: ['Diseño UI', 'Dirección Visual', 'Web Frontend', 'Cloudflare Pages'],
    liveUrl: 'https://mind-skin.pages.dev/',
    liveLabel: 'Visitar sitio',
    image: projectMindskinWeb,
    imageAlt: 'Interfaz móvil de la plataforma Mind & Skin sobre piedra travertino',
  },
  {
    id: 'medicina-estilo-vida',
    title: 'Medicina del Estilo de Vida — Portal Educativo',
    category: 'Web & Cloud',
    year: '2026',
    summary:
      'Sitio web educativo estructurado en torno a los pilares fundamentales de la Medicina del Estilo de Vida (nutrición, movimiento, descanso y gestión del estrés).',
    challenge:
      'Organizar contenido médico basado en evidencia de forma clara, navegable y comprensible para pacientes y profesionales.',
    solution:
      'Arquitectura informativa limpia con secciones didácticas, optimización SEO y despliegue continuo en Vercel.',
    outcome:
      'Portal informativo en producción con carga instantánea y estructura orientada a posicionamiento orgánico.',
    stack: ['Web App', 'SEO Técnico', 'Vercel', 'Diseño Editorial'],
    liveUrl: 'https://medicina-estilo-vida.vercel.app/',
    liveLabel: 'Visitar sitio',
    image: projectMedicinaEstiloVida,
    imageAlt: 'Portal educativo de Medicina del Estilo de Vida abierto en computadora portátil',
  },
  {
    id: 'atopica-pwa',
    title: 'Atópica PWA — Educación y Clinimetría Dermatológica',
    category: 'Web & Cloud',
    year: '2025',
    summary:
      'Aplicación Web Progresiva (PWA) educativa y de clinimetría orientada a la evaluación clínica estandarizada y consulta dermatológica.',
    challenge:
      'Reunir guías educativas y calculadoras clinimétricas en una herramienta móvil liviana, instalable y utilizable en consultorio sin depender de conexión constante.',
    solution:
      'PWA con Service Worker para acceso offline, cálculo inmediato de puntajes clinimétricos y despliegue automatizado en GitLab Pages.',
    outcome:
      'Herramienta de consulta e interpretación clinimétrica instalable en cualquier dispositivo mediante GitLab Pages.',
    stack: ['PWA', 'Clinimetría', 'Educación Médica', 'GitLab Pages'],
    liveUrl: 'https://ecarbo.gitlab.io/atopica-pwa/#/',
    liveLabel: 'Abrir PWA',
    image: projectAtopicaClinimetria,
    imageAlt:
      'Teléfono mostrando la aplicación educativa y de clinimetría Atópica PWA junto a notas clínicas',
  },
  {
    id: 'simplex-web',
    title: 'Simplex — E-Commerce con Astro, Login y Carrito',
    category: 'Web & Cloud',
    year: '2026',
    summary:
      'Plataforma de comercio electrónico construida con Astro, catálogo dinámico, autenticación de usuarios (login) y gestión de carrito de compras persistente.',
    challenge:
      'Construir una tienda online ultrarrápida con excelente SEO inicial que mantenga la sesión de usuario y el estado del carrito sin sobrecargar el navegador.',
    solution:
      'Arquitectura Astro con hidratación selectiva (Islands) para el flujo de login y carrito de compras, publicada globalmente en Cloudflare Pages.',
    outcome:
      'Carga inicial instantánea con HTML estático optimizado, compra fluida con sesión integrada y despliegue continuo en edge.',
    stack: ['Astro', 'E-Commerce', 'Login & Carrito', 'Cloudflare Pages'],
    liveUrl: 'https://simplex-552.pages.dev/',
    liveLabel: 'Visitar tienda',
    image: projectSimplexEcommerce,
    imageAlt:
      'Laptop mostrando la tienda online Simplex construida con Astro, con login y carrito de compras',
  },
  {
    id: 'blog-salud-astro',
    title: 'Blog de Salud — Publicación Editorial con Astro',
    category: 'Web & Cloud',
    year: '2026',
    summary:
      'Blog de divulgación en salud desarrollado con Astro, contenido estructurado en Markdown y despliegue continuo en Netlify orientado a velocidad y SEO.',
    challenge:
      'Publicar artículos médicos y de bienestar con tiempos de carga mínimos, lectura cómoda y posicionamiento orgánico sólido en buscadores.',
    solution:
      'Generación estática con Astro Content Collections, cero JavaScript innecesario en el cliente, metadatos SEO por artículo y hosting en Netlify.',
    outcome:
      'Sitio editorial liviano de carga instantánea con gestión ágil de contenidos y arquitectura preparada para SEO.',
    stack: ['Astro', 'Markdown', 'SEO Técnico', 'Netlify'],
    liveUrl: 'https://blog-salud.netlify.app/',
    liveLabel: 'Visitar blog',
    image: projectBlogSaludAstro,
    imageAlt:
      'Laptop mostrando el Blog de Salud desarrollado con Astro sobre escritorio minimalista',
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  projectType: string;
  quote: string;
  resultMetric: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Martín Echeverría',
    role: 'Director de Operaciones',
    organization: 'Estudio Litoral Logística',
    projectType: 'Migración Cloud · Docker & Traefik',
    quote:
      'Antes pagábamos tres servicios en la nube distintos y cada actualización era un riesgo. ADISENIAR unificó todo nuestro backend en un servidor propio con Docker y ahora desplegamos cambios en segundos con total estabilidad.',
    resultMetric: '64% menos gasto mensual en hosting',
  },
  {
    id: 't2',
    name: 'Carolina Méndez',
    role: 'Fundadora',
    organization: 'Estudio Contable Méndez & Asoc.',
    projectType: 'App de Escritorio · Rust & Tauri',
    quote:
      'Nuestro sistema anterior tardaba casi medio minuto en abrir y se congelaba con planillas grandes. La nueva aplicación en Rust y Tauri arranca al instante, funciona sin internet y redujo las fallas operativas diarias.',
    resultMetric: 'Arranque en < 1s y operación offline estable',
  },
  {
    id: 't3',
    name: 'Lucas Benítez',
    role: 'Responsable Comercial',
    organization: 'Nexo Ingeniería Industrial',
    projectType: 'Web Corporativa & Diseño con IA',
    quote:
      'Buscábamos una web minimalista que transmitiera solidez técnica y ordenara nuestro catálogo. La combinación de diseño asistido por IA con desarrollo a medida duplicó nuestras consultas directas por WhatsApp en el primer trimestre.',
    resultMetric: '+110% consultas comerciales en 90 días',
  },
];
