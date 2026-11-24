import {useMemo, useState} from 'react';
import {ArrowUpRight, MessageCircle, Search} from 'lucide-react';
import {buildWhatsAppUrl} from '../data/siteData';
import {formatDateEs, loadMarkdownPosts} from '../utils/blog';

export function BlogSection() {
  const allPosts = useMemo(() => loadMarkdownPosts(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(allPosts.map((post) => post.category)))],
    [allPosts],
  );

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.keywords.some((keyword) => keyword.toLowerCase().includes(query))
      );
    });
  }, [allPosts, searchQuery, selectedCategory]);

  return (
    <section
      id="blog"
      className="border-b border-[#E5E7EB] bg-white py-16 sm:py-20 dark:border-[#1F2937] dark:bg-[#0D1320]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium text-[#8A0E0E] dark:text-[#FCA5A5]">
              Blog Técnico en Markdown (.md)
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight text-[#111827] [text-wrap:balance] sm:text-4xl dark:text-white">
              Artículos ligeros para compartir conocimiento y posicionar en buscadores.
            </h2>
          </div>

          <a
            href={buildWhatsAppUrl('Hola ADISENIAR, me gustaría sugerir un tema para el blog.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] items-center gap-2 self-start rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2 text-xs font-semibold text-[#0B1F4B] whitespace-nowrap shrink-0 transition-colors hover:border-[#0B1F4B]/40 hover:bg-white lg:self-auto dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#93C5FD] dark:hover:border-[#3B82F6]/50 dark:hover:bg-[#161F30]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Sugerir un tema</span>
          </a>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-y border-[#E5E7EB] py-4 md:flex-row md:items-center dark:border-[#1F2937]">
          <div
            role="tablist"
            aria-label="Filtrar artículos por categoría"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-[#E5E7EB] bg-[#F4F5F7] p-1 dark:border-[#1F2937] dark:bg-[#111827]"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
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

          <div className="relative w-full md:w-72">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#6B7280] dark:text-[#9CA3AF]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar artículos o temas..."
              aria-label="Buscar artículos del blog"
              className="min-h-[42px] w-full rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] pr-3 pl-9 text-sm text-[#111827] placeholder:text-[#6B7280] focus:border-[#0B1F4B] focus:bg-white focus:outline-none dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#F3F4F6] dark:placeholder:text-[#9CA3AF] dark:focus:border-[#3B82F6] dark:focus:bg-[#161F30]"
            />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-8 text-center dark:border-[#1F2937] dark:bg-[#111827]">
            <p className="text-sm font-medium text-[#111827] dark:text-white">
              No se encontraron artículos que coincidan con tu búsqueda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
              }}
              className="mt-3 text-xs font-semibold text-[#0B1F4B] underline underline-offset-4 dark:text-[#93C5FD]"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-6 transition-colors hover:border-[#0B1F4B]/40 hover:bg-white dark:border-[#1F2937] dark:bg-[#111827] dark:hover:border-[#3B82F6]/40 dark:hover:bg-[#161F30]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                    <span className="font-medium text-[#0B1F4B] dark:text-[#93C5FD]">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date} className="tabular-nums">
                      {formatDateEs(post.date)}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{post.readingTime} de lectura</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#111827] dark:text-white">
                    <a
                      href={`/blog/${post.slug}/`}
                      className="text-left transition-colors hover:text-[#0B1F4B] dark:hover:text-[#93C5FD]"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4B5563] dark:text-[#D1D5DB]">
                    {post.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E5E7EB] pt-4 dark:border-[#1F2937]">
                  <span className="max-w-[200px] truncate font-mono text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">
                    /blog/{post.slug}/
                  </span>
                  <a
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B1F4B] whitespace-nowrap shrink-0 hover:text-[#8A0E0E] dark:text-[#93C5FD] dark:hover:text-[#FCA5A5]"
                  >
                    <span>Leer artículo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
