import {useState} from 'react';
import {ArrowUpRight, ExternalLink} from 'lucide-react';
import {buildWhatsAppUrl, PORTFOLIO_PROJECTS} from '../data/siteData';
import type {PortfolioCategory, PortfolioProject} from '../data/siteData';
import {Modal} from './Modal';
import {ResilientImage} from './ResilientImage';

const FILTER_OPTIONS: PortfolioCategory[] = [
  'Todos',
  'Open Source',
  'Web & Cloud',
  'Escritorio Rust',
  'Diseño + IA',
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeFilter === 'Todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => p !== featuredProject);

  return (
    <section
      id="portafolio"
      className="border-b border-[#E5E7EB] bg-white py-16 sm:py-20 dark:border-[#1F2937] dark:bg-[#0D1320]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium text-[#8A0E0E] dark:text-[#FCA5A5]">
              Portafolio Técnico & Open Source
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight text-[#111827] [text-wrap:balance] sm:text-4xl dark:text-white">
              Casos reales en web, escritorio nativo y servidores Docker.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Functional Controls) */}
          <div
            role="tablist"
            aria-label="Filtrar proyectos por especialidad"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-[#E5E7EB] bg-[#F4F5F7] p-1 dark:border-[#1F2937] dark:bg-[#111827]"
          >
            {FILTER_OPTIONS.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(category)}
                  className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'bg-white text-[#0B1F4B] shadow-xs dark:bg-[#1E293B] dark:text-white'
                      : 'text-[#4B5563] hover:text-[#111827] dark:text-[#9CA3AF] dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Marquee Project (Fichio Open Source) */}
        {featuredProject && (
          <article className="mt-10 grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] lg:grid-cols-12 dark:border-[#1F2937] dark:bg-[#111827]">
            <div className="aspect-[4/3] lg:aspect-auto lg:col-span-6 bg-[#F4F5F7] dark:bg-[#161F30]">
              <ResilientImage
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  <span className="font-semibold text-[#8A0E0E] dark:text-[#FCA5A5]">
                    Proyecto Destacado
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{featuredProject.year}</span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl dark:text-white">
                  {featuredProject.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-[#374151] dark:text-[#D1D5DB]">
                  {featuredProject.summary}
                </p>

                <div className="mt-5 border-t border-[#E5E7EB] pt-4 dark:border-[#1F2937]">
                  <p className="text-xs font-semibold text-[#111827] dark:text-white">
                    Impacto técnico
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">
                    {featuredProject.outcome}
                  </p>
                </div>

                <p className="mt-4 font-mono text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {featuredProject.stack.join(' · ')}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#0B1F4B] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
                  >
                    <span>{featuredProject.liveLabel || 'Visitar proyecto'}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold text-[#111827] whitespace-nowrap shrink-0 transition-colors hover:border-[#0B1F4B]/40 dark:border-[#1F2937] dark:bg-[#161F30] dark:text-[#F3F4F6] dark:hover:border-[#3B82F6]/50"
                >
                  <span>Ver ficha técnica</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {secondaryProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-colors hover:border-[#0B1F4B]/30 dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#3B82F6]/40"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden border-b border-[#E5E7EB] bg-[#F4F5F7] dark:border-[#1F2937] dark:bg-[#161F30]">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.year}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-[#111827] dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563] dark:text-[#D1D5DB]">
                      {project.summary}
                    </p>

                    <p className="mt-4 font-mono text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                      {project.stack.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E7EB] px-6 py-4 dark:border-[#1F2937]">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F4B] whitespace-nowrap shrink-0 transition-colors hover:text-[#8A0E0E] dark:text-[#93C5FD] dark:hover:text-[#FCA5A5]"
                  >
                    <span>Explorar arquitectura</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4B5563] whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F4B] dark:text-[#9CA3AF] dark:hover:text-white"
                    >
                      <span>{project.liveLabel || 'Abrir'}</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <Modal
          onClose={() => setSelectedProject(null)}
          labelledBy="project-modal-title"
          className="max-w-2xl"
        >
          <div className="pr-10">
            <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
              {selectedProject.category} <span aria-hidden="true">·</span>{' '}
              <span className="font-mono tabular-nums">{selectedProject.year}</span>
            </p>
            <h3
              id="project-modal-title"
              className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#111827] dark:text-white"
            >
              {selectedProject.title}
            </h3>
          </div>

          <div className="mt-5 aspect-[4/3] overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F4F5F7] dark:border-[#1F2937] dark:bg-[#161F30]">
            <ResilientImage
              src={selectedProject.image}
              alt={selectedProject.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#374151] dark:text-[#D1D5DB]">
            <div>
              <h4 className="font-display text-sm font-semibold text-[#111827] dark:text-white">
                Desafío
              </h4>
              <p className="mt-1">{selectedProject.challenge}</p>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-[#111827] dark:text-white">
                Solución implementada
              </h4>
              <p className="mt-1">{selectedProject.solution}</p>
            </div>
            <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-4 dark:border-[#1F2937] dark:bg-[#161F30]">
              <h4 className="font-display text-sm font-semibold text-[#0B1F4B] dark:text-[#93C5FD]">
                Resultado medible
              </h4>
              <p className="mt-1 text-[#111827] dark:text-[#F3F4F6]">{selectedProject.outcome}</p>
            </div>
          </div>

          <p className="mt-5 font-mono text-xs text-[#6B7280] dark:text-[#9CA3AF]">
            Stack: {selectedProject.stack.join(' · ')}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#E5E7EB] pt-5 dark:border-[#1F2937]">
            {selectedProject.liveUrl && (
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#0B1F4B] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]"
              >
                <span>{selectedProject.liveLabel || 'Abrir proyecto'}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <a
              href={buildWhatsAppUrl(
                `Hola ADISENIAR, vi el proyecto "${selectedProject.title}" y me gustaría consultar por algo similar.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold text-[#111827] whitespace-nowrap shrink-0 hover:border-[#0B1F4B]/40 dark:border-[#1F2937] dark:bg-[#161F30] dark:text-[#F3F4F6] dark:hover:border-[#3B82F6]/50"
            >
              <span>Consultar por un proyecto similar</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}
