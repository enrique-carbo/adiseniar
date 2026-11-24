import {ArrowDownRight, ArrowUpRight, MessageCircle} from 'lucide-react';
import {heroStudio} from '../assets';
import {buildWhatsAppUrl} from '../data/siteData';
import type {Theme} from '../hooks/useTheme';
import {ResilientImage} from './ResilientImage';
import {ThemeToggle} from './ThemeToggle';

const CAPABILITY_STRIP = [
  {
    label: 'Tecnologías Web',
    value: 'Astro · React · TypeScript',
    detail: 'Interfaces rápidas orientadas a SEO y conversión',
  },
  {
    label: 'Escritorio Nativo',
    value: 'Rust · Tauri · SQLite',
    detail: 'Binarios compactos de alto rendimiento y baja RAM',
  },
  {
    label: 'Despliegue Cloud',
    value: 'Docker · Traefik · VPS',
    detail: 'Servidores propios con SSL y CI/CD reproducible',
  },
  {
    label: 'Diseño Gráfico + IA',
    value: 'Identidad · UI · Activos IA',
    detail: 'Dirección visual ágil con criterio tipográfico humano',
  },
];

interface HeroProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Hero({theme, onToggleTheme}: HeroProps) {
  return (
    <section
      id="inicio"
      className="border-b border-[#E5E7EB] bg-white dark:border-[#1F2937] dark:bg-[#0D1320]"
    >
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 lg:px-8 lg:pt-12 lg:pb-16">
        {/* Top Metadata + Theme Switch Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4 dark:border-[#1F2937]">
          <p className="text-xs font-medium tracking-wide text-[#4B5563] dark:text-[#9CA3AF]">
            Ingeniería de Software <span aria-hidden="true">·</span> Infraestructura Docker{' '}
            <span aria-hidden="true">·</span> Diseño con IA
          </p>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <h1
                className="max-w-2xl font-display font-bold tracking-tight text-[#111827] [text-balance] dark:text-white"
                style={{fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08}}
              >
                Software veloz, despliegues autónomos y diseño visual con criterio.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4B5563] sm:text-[17px] dark:text-[#D1D5DB]">
                En{' '}
                <strong className="font-semibold text-[#111827] dark:text-white">ADISENIAR</strong>{' '}
                desarrollamos aplicaciones web modernas, software de escritorio en Rust y Tauri,
                servidores en producción con Docker, e identidades visuales potenciadas con
                inteligencia artificial.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppUrl(
                  'Hola ADISENIAR, me gustaría conversar sobre un desarrollo o despliegue.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0B1F4B] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#portafolio"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-5 py-3 text-sm font-medium text-[#111827] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#0B1F4B]/40 hover:bg-white dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#F3F4F6] dark:hover:border-[#3B82F6]/50 dark:hover:bg-[#161F30]"
              >
                <span>Ver portafolio técnico</span>
                <ArrowDownRight
                  className="h-4 w-4 text-[#0B1F4B] dark:text-[#93C5FD]"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://fichio.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-[#8A0E0E] underline decoration-[#8A0E0E]/30 underline-offset-4 whitespace-nowrap shrink-0 transition-colors hover:decoration-[#8A0E0E] dark:text-[#FCA5A5] dark:decoration-[#FCA5A5]/40 dark:hover:decoration-[#FCA5A5]"
              >
                <span>Open Source: fichio.com.ar</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Matching-height Editorial Visual */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-65 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F4F5F7] dark:border-[#1F2937] dark:bg-[#111827]">
              <ResilientImage
                src={heroStudio}
                alt="Estación de trabajo minimalista de ADISENIAR para desarrollo web, Rust y diseño gráfico"
                className="h-full w-full object-cover"
                fallbackLabel="Estudio técnico y creativo ADISENIAR"
                priority
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Capability Strip Below Hero Split */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-[#E5E7EB] rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 dark:divide-[#1F2937] dark:border-[#1F2937] dark:bg-[#111827]">
          {CAPABILITY_STRIP.map((item) => (
            <div key={item.label} className="p-5">
              <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">{item.label}</p>
              <p className="mt-1.5 font-mono text-sm font-medium text-[#0B1F4B] tabular-nums dark:text-[#93C5FD]">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-[#D1D5DB]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
