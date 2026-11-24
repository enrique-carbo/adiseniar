import {parseMarkdownFile} from './blogCore';
import type {BlogPost} from './blogCore';

export {formatDateEs} from './blogCore';
export type {BlogPost} from './blogCore';

export function loadMarkdownPosts(): BlogPost[] {
  const modules = import.meta.glob('/src/content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  }) as Record<string, string>;

  const posts = Object.entries(modules).map(([filePath, raw]) => {
    const fileName = filePath.split('/').pop()?.replace(/\.md$/, '') || 'post';
    return parseMarkdownFile(raw, fileName);
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
