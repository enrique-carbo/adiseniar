import {ArrowUpRight} from 'lucide-react';
import {buildWhatsAppUrl, CONTACT_EMAIL, WHATSAPP_NUMBER_DISPLAY} from '../data/siteData';
import type {Theme} from '../hooks/useTheme';
import {BrandLogo} from './BrandLogo';
import {ThemeToggle} from './ThemeToggle';

interface FooterProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Footer({theme, onToggleTheme}: FooterProps) {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white dark:border-[#1F2937] dark:bg-[#0D1320]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-[#0B1F4B] dark:text-white"
            >
              <BrandLogo className="h-6 w-6" />
              <span>ADISENIAR</span>
            </a>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
              Desarrollo de software web, aplicaciones de escritorio en Rust y Tauri, servidores con
              Docker y diseño gráfico con IA.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-[#4B5563] dark:text-[#9CA3AF]">
            <a href="#servicios" className="hover:text-[#0B1F4B] dark:hover:text-white">
              Servicios
            </a>
            <a href="#portafolio" className="hover:text-[#0B1F4B] dark:hover:text-white">
              Portafolio
            </a>
            <a href="#testimonios" className="hover:text-[#0B1F4B] dark:hover:text-white">
              Testimonios
            </a>
            <a href="#blog" className="hover:text-[#0B1F4B] dark:hover:text-white">
              Blog .md
            </a>
            <a
              href="https://fichio.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#8A0E0E] hover:underline dark:text-[#FCA5A5]"
            >
              <span>Fichio Open Source</span>
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#E5E7EB] pt-6 text-xs text-[#6B7280] sm:flex-row sm:items-center dark:border-[#1F2937] dark:text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} ADISENIAR. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={buildWhatsAppUrl('Hola ADISENIAR, me comunico desde tu sitio web.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono tabular-nums hover:text-[#0B1F4B] dark:hover:text-white"
            >
              WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-[#0B1F4B] dark:hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
