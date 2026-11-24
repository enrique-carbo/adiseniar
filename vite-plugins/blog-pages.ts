import fs from 'node:fs';
import path from 'node:path';
import type {Plugin} from 'vite';
import {formatDateEs, parseMarkdownFile} from '../src/utils/blogCore.ts';
import type {BlogPost} from '../src/utils/blogCore.ts';

const SITE_URL = 'https://adiseniar.com.ar';
const BLOG_DIR = path.resolve(process.cwd(), 'src/content/blog');
const DEV_STYLES = `<script type="module" src="/@vite/client"></script>\n    <script type="module" src="/src/index.css"></script>`;

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);
}

function renderInline(text: string): string {
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let result = '';
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    result += escapeHtml(text.slice(lastIndex, index));
    const token = match[0];

    if (token.startsWith('`')) {
      result += `<code class="rounded bg-[#F3F4F6] px-1.5 py-0.5 font-mono text-[0.875em] text-[#0B1F4B] dark:bg-[#1E293B] dark:text-[#93C5FD]">${escapeHtml(token.slice(1, -1))}</code>`;
    } else if (token.startsWith('**')) {
      result += `<strong class="font-semibold text-[#111827] dark:text-white">${escapeHtml(token.slice(2, -2))}</strong>`;
    } else if (token.startsWith('*')) {
      result += `<em>${escapeHtml(token.slice(1, -1))}</em>`;
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = link[2];
        if (/^https?:\/\//.test(href) || href.startsWith('#')) {
          result += `<a class="font-medium text-[#0B1F4B] underline decoration-[#0B1F4B]/30 underline-offset-4 dark:text-[#93C5FD]" href="${escapeHtml(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(link[1])}</a>`;
        } else {
          result += escapeHtml(link[1]);
        }
      }
    }
    lastIndex = index + token.length;
  }

  return result + escapeHtml(text.slice(lastIndex));
}

function markdownToHtml(content: string): string {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index++;
      continue;
    }

    if (line.trim().startsWith('```')) {
      const language = line.trim().slice(3).trim();
      const code: string[] = [];
      index++;
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        code.push(lines[index]);
        index++;
      }
      index++;
      html.push(
        `<div class="my-6 overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#0F172A] dark:border-[#1F2937] dark:bg-[#090D16]"><p class="border-b border-white/10 px-4 py-2 font-mono text-xs text-slate-400">${escapeHtml(language || 'text')}</p><pre class="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-[#F8FAFC]"><code>${escapeHtml(code.join('\n'))}</code></pre></div>`,
      );
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length;
      const size = level === 3 ? 'text-xl mt-8' : 'text-2xl mt-10';
      html.push(
        `<h${level} class="mb-4 font-display font-semibold tracking-tight text-[#111827] ${size} dark:text-white">${renderInline(heading[2])}</h${level}>`,
      );
      index++;
      continue;
    }

    if (line.trim().startsWith('> ')) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('> ')) {
        quote.push(lines[index].trim().slice(2));
        index++;
      }
      html.push(
        `<blockquote class="my-6 rounded-xl border border-[#E5E7EB] bg-[#F4F5F7] px-5 py-4 text-[15px] leading-relaxed text-[#374151] dark:border-[#1F2937] dark:bg-[#161F30] dark:text-[#D1D5DB]">${renderInline(quote.join(' '))}</blockquote>`,
      );
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*]\s+/, ''));
        index++;
      }
      html.push(
        `<ul class="my-5 list-disc space-y-2.5 pl-5 text-[15.5px] leading-relaxed text-[#374151] dark:text-[#D1D5DB]">${items.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`,
      );
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ''));
        index++;
      }
      html.push(
        `<ol class="my-5 list-decimal space-y-2.5 pl-5 text-[15.5px] leading-relaxed text-[#374151] dark:text-[#D1D5DB]">${items.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ol>`,
      );
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      html.push('<hr class="my-8 border-[#E5E7EB] dark:border-[#1F2937]" />');
      index++;
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() !== '' &&
      !/^#{1,3}\s/.test(lines[index]) &&
      !lines[index].trim().startsWith('```') &&
      !lines[index].trim().startsWith('> ') &&
      !/^\s*[-*]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index])
    ) {
      paragraph.push(lines[index].trim());
      index++;
    }
    html.push(
      `<p class="my-4 text-[16px] leading-[1.75] text-[#374151] dark:text-[#D1D5DB]">${renderInline(paragraph.join(' '))}</p>`,
    );
  }

  return html.join('\n      ');
}

function readPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) =>
      parseMarkdownFile(
        fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'),
        file.replace(/\.md$/, ''),
      ),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function buildArticleHtml(post: BlogPost, styles: string): string {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const pageTitle = `${post.title} | ADISENIAR`;
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {'@type': 'Organization', name: 'ADISENIAR'},
    publisher: {'@type': 'Organization', name: 'ADISENIAR'},
    keywords: post.keywords.join(', '),
    mainEntityOfPage: url,
    url,
  });

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(post.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${escapeHtml(url)}" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="ADISENIAR" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(post.description)}" />
    <meta property="article:published_time" content="${escapeHtml(post.date)}" />
    <meta property="article:section" content="${escapeHtml(post.category)}" />
    ${post.keywords.map((keyword) => `<meta property="article:tag" content="${escapeHtml(keyword)}" />`).join('\n    ')}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(post.description)}" />
    <script type="application/ld+json">${structuredData}</script>
    ${styles}
    <script>
      (function () {
        try {
          var saved = localStorage.getItem('adiseniar-theme');
          var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) document.documentElement.classList.add('dark');
        } catch (e) {}
      })();
    </script>
  </head>
  <body class="bg-[#FAFAFA] text-[#111827] antialiased transition-colors duration-150 selection:bg-[#0B1F4B] selection:text-white dark:bg-[#090D16] dark:text-[#F3F4F6] dark:selection:bg-[#2563EB]">
    <main class="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <a href="/#blog" class="inline-flex items-center gap-2 text-xs font-medium text-[#8A0E0E] underline decoration-[#8A0E0E]/30 underline-offset-4 dark:text-[#FCA5A5]">
        ← Volver al blog
      </a>
      <header class="mt-10 border-b border-[#E5E7EB] pb-8 dark:border-[#1F2937]">
        <div class="flex flex-wrap items-center gap-2 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
          <span class="font-semibold text-[#8A0E0E] dark:text-[#FCA5A5]">${escapeHtml(post.category)}</span>
          <span aria-hidden="true">·</span>
          <time datetime="${escapeHtml(post.date)}">${escapeHtml(formatDateEs(post.date))}</time>
          <span aria-hidden="true">·</span>
          <span>${escapeHtml(post.readingTime)} de lectura</span>
        </div>
        <h1 class="mt-4 font-display text-3xl font-bold tracking-tight text-[#111827] [text-wrap:balance] sm:text-4xl dark:text-white">${escapeHtml(post.title)}</h1>
        <p class="mt-4 text-[15px] leading-relaxed text-[#4B5563] dark:text-[#D1D5DB]">${escapeHtml(post.description)}</p>
      </header>
      <article class="mt-4">
      ${markdownToHtml(post.content)}
      </article>
      <footer class="mt-12 border-t border-[#E5E7EB] pt-6 dark:border-[#1F2937]">
        <p class="font-mono text-xs text-[#6B7280] dark:text-[#9CA3AF]">Keywords: ${escapeHtml(post.keywords.join(', '))}</p>
        <div class="mt-5 flex flex-wrap items-center gap-3">
          <a href="/#contacto" class="inline-flex min-h-[44px] items-center rounded-lg bg-[#0B1F4B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#132E6B] dark:bg-[#2563EB] dark:hover:bg-[#3B82F6]">Consultar sobre este tema</a>
          <a href="/#blog" class="inline-flex min-h-[44px] items-center rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#F4F5F7] dark:border-[#1F2937] dark:text-[#F3F4F6] dark:hover:bg-[#161F30]">Volver al blog</a>
        </div>
        <p class="mt-8 text-xs text-[#6B7280] dark:text-[#9CA3AF]">© ${new Date().getFullYear()} ADISENIAR. Todos los derechos reservados.</p>
      </footer>
    </main>
  </body>
</html>`;
}

function buildSitemap(): string {
  const urls = [
    {loc: `${SITE_URL}/`, lastmod: new Date().toISOString().slice(0, 10)},
    ...readPosts().map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}/`,
      lastmod: post.date,
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => `<url><loc>${escapeHtml(url.loc)}</loc><lastmod>${url.lastmod}</lastmod></url>`)
    .join('\n  ')}
</urlset>
`;
}

export function blogPages(): Plugin {
  return {
    name: 'adiseniar-blog-pages',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url || '').split('?')[0];

        if (pathname === '/sitemap.xml') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(buildSitemap());
          return;
        }

        const match = pathname?.match(/^\/blog\/([a-z0-9-]+)\/?$/i);
        if (!match) return next();

        const post = readPosts().find((item) => item.slug === match[1]);
        if (!post) return next();

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(buildArticleHtml(post, DEV_STYLES));
      });
    },
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const cssHref = fs
        .readFileSync(indexPath, 'utf8')
        .match(/<link rel="stylesheet"[^>]*href="([^"]+\.css)"/)?.[1];
      const styles = cssHref
        ? `<link rel="stylesheet" crossorigin href="${cssHref}" />`
        : DEV_STYLES;

      for (const post of readPosts()) {
        const outputDir = path.join(distDir, 'blog', post.slug);
        fs.mkdirSync(outputDir, {recursive: true});
        fs.writeFileSync(path.join(outputDir, 'index.html'), buildArticleHtml(post, styles));
      }

      fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap());
    },
  };
}
