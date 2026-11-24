export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  keywords: string[];
  readingTime: string;
  content: string;
  rawMarkdown: string;
}

export function parseMarkdownFile(raw: string, fallbackSlug: string): BlogPost {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  const frontmatterMatch = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  const meta: Record<string, string> = {};
  let body = normalized;

  if (frontmatterMatch) {
    const yamlBlock = frontmatterMatch[1];
    body = frontmatterMatch[2].trim();

    for (const line of yamlBlock.split('\n')) {
      const colonIdx = line.indexOf(':');
      if (colonIdx === -1) continue;
      const key = line.slice(0, colonIdx).trim();
      const value = line
        .slice(colonIdx + 1)
        .trim()
        .replace(/^['"]|['"]$/g, '');
      if (key) meta[key] = value;
    }
  }

  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const computedReadingTime = `${Math.max(1, Math.ceil(wordCount / 190))} min`;
  const slug = meta.slug || fallbackSlug;
  const keywords = (meta.keywords || '')
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    id: slug,
    slug,
    title: meta.title || 'Artículo técnico',
    description:
      meta.description ||
      body
        .slice(0, 155)
        .replace(/[#*`>\n]/g, ' ')
        .trim(),
    date: meta.date || '2026-11-01',
    category: meta.category || 'Ingeniería',
    keywords,
    readingTime: meta.readingTime || computedReadingTime,
    content: body,
    rawMarkdown: raw,
  };
}

export function formatDateEs(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(parsed);
}
