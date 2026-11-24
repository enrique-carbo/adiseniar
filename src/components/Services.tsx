import {ArrowUpRight} from 'lucide-react';
import {buildWhatsAppUrl, SERVICES} from '../data/siteData';
import {ResilientImage} from './ResilientImage';

export function Services() {
  return (
    <section
      id="servicios"
      className="border-b border-[#E5E7EB] bg-[#FAFAFA] py-16 sm:py-20 dark:border-[#1F2937] dark:bg-[#090D16]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium text-[#8A0E0E] dark:text-[#FCA5A5]">
              Capacidades & Servicios
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight text-[#111827] [text-wrap:balance] sm:text-4xl dark:text-white">
              Ingeniería completa desde el diseño hasta el servidor en producción.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
            Cada proyecto combina código limpio, infraestructura propia predecible y comunicación
            visual clara sin intermediarios innecesarios.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.index}
              className={`flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-7 dark:border-[#1F2937] dark:bg-[#111827] ${service.spanClass}`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl dark:text-white">
                    <span className="mr-2 font-mono text-base font-medium text-[#0B1F4B] tabular-nums dark:text-[#93C5FD]">
                      {service.index}
                    </span>
                    {service.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                  {service.subtitle}
                </p>

                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#374151] dark:text-[#D1D5DB]">
                  {service.description}
                </p>

                {service.image && (
                  <div className="mt-5 aspect-[4/3] overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F4F5F7] dark:border-[#1F2937] dark:bg-[#161F30]">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <ul className="mt-5 space-y-2 border-t border-[#E5E7EB] pt-4 text-sm text-[#4B5563] dark:border-[#1F2937] dark:text-[#D1D5DB]">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0B1F4B] dark:bg-[#60A5FA]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <a
                  href={buildWhatsAppUrl(
                    `Hola ADISENIAR, me interesa consultar sobre: ${service.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F4B] transition-colors hover:text-[#8A0E0E] dark:text-[#93C5FD] dark:hover:text-[#FCA5A5]"
                >
                  <span>Consultar este servicio</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
