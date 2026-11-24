import {TESTIMONIALS} from '../data/siteData';

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="border-b border-[#E5E7EB] bg-[#FAFAFA] py-16 sm:py-20 dark:border-[#1F2937] dark:bg-[#090D16]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium text-[#8A0E0E] dark:text-[#FCA5A5]">
              Testimonios de Clientes
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight text-[#111827] [text-wrap:balance] sm:text-4xl dark:text-white">
              Resultados verificables en operación diaria.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
            Equipos y empresas que migraron su infraestructura, optimizaron herramientas de
            escritorio o renovaron su presencia visual.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-7 dark:border-[#1F2937] dark:bg-[#111827]"
            >
              <div>
                <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                  {item.projectType}
                </p>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-[#1F2937] dark:text-[#E5E7EB]">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="mt-6 border-t border-[#E5E7EB] pt-4 dark:border-[#1F2937]">
                <p className="font-mono text-xs font-medium text-[#0B1F4B] tabular-nums dark:text-[#93C5FD]">
                  {item.resultMetric}
                </p>
                <div className="mt-2">
                  <p className="font-display text-sm font-semibold text-[#111827] dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#4B5563] dark:text-[#9CA3AF]">
                    {item.role} <span aria-hidden="true">·</span> {item.organization}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
