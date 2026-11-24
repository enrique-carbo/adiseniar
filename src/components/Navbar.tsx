import {useState} from 'react';
import {Menu, MessageCircle, X} from 'lucide-react';
import {buildWhatsAppUrl} from '../data/siteData';
import {BrandLogo} from './BrandLogo';

const NAV_LINKS = [
  {href: '#servicios', label: 'Servicios'},
  {href: '#portafolio', label: 'Portafolio'},
  {href: '#testimonios', label: 'Testimonios'},
  {href: '#blog', label: 'Blog'},
  {href: '#contacto', label: 'Contacto'},
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-[#FAFAFA]/95 backdrop-blur-sm dark:border-[#1F2937] dark:bg-[#090D16]/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Title (single line, no subtitles or badges) */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 font-display text-lg font-bold tracking-tight text-[#0B1F4B] dark:text-white"
        >
          <BrandLogo className="h-7 w-7" priority />
          <span>ADISENIAR</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B5563] dark:text-[#9CA3AF]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#0B1F4B] hover:underline hover:decoration-[#0B1F4B]/40 hover:underline-offset-4 dark:hover:text-white dark:hover:decoration-white/40"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildWhatsAppUrl('Hola ADISENIAR, quiero consultar por un proyecto.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#0B1F4B] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>WhatsApp Directo</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#111827] md:hidden dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#F3F4F6]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E5E7EB] bg-white px-4 py-4 md:hidden dark:border-[#1F2937] dark:bg-[#111827]">
          <nav aria-label="Menú móvil" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-[#111827] hover:bg-[#F4F5F7] dark:text-[#F3F4F6] dark:hover:bg-[#161F30]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl('Hola ADISENIAR, quiero consultar por un proyecto.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0B1F4B] px-4 py-2.5 text-sm font-semibold text-white dark:bg-[#2563EB]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Escribir por WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
