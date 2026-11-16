import { type CollectionEntry, getCollection } from 'astro:content';
import { REPO_URL } from '../consts';

export type Post = CollectionEntry<'blog'>;

// `<!--truncate-->` in .md, `{/* truncate */}` in .mdx (HTML comments aren't valid MDX)
const TRUNCATE = /<!--\s*truncate\s*-->|\{\/\*\s*truncate\s*\*\/\}/;

/** Published posts (drafts only show up in `astro dev`), newest first. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * URL path of a post, matching the old Docusaurus permalinks:
 * frontmatter `slug` wins, otherwise the file path without extension and `/index`.
 * e.g. servicenow/cad-exam-prep.md → servicenow/cad-exam-prep
 */
export function postSlug(post: Post): string {
	if (post.data.slug) return post.data.slug.replace(/^\/+|\/+$/g, '');
	const file = post.filePath ?? post.id;
	return file
		.replace(/^.*?src\/content\/blog\//, '')
		.replace(/\.(md|mdx)$/, '')
		.replace(/\/index$/, '');
}

export function postUrl(post: Post): string {
	return `/${postSlug(post)}`;
}

export function editUrl(post: Post): string {
	return `${REPO_URL}/tree/master/${post.filePath}`;
}

/** Same slugging Docusaurus used for tag URLs: "academic work" → "academic-work". */
export function tagSlug(tag: string): string {
	return tag
		.toLowerCase()
		.trim()
		.replace(/[\s_]+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

export function tagUrl(tag: string): string {
	return `/tags/${tagSlug(tag)}`;
}

/** Plain-text excerpt: content before <!--truncate-->, else description, else first paragraph. */
export function excerpt(post: Post): string {
	if (post.data.description) return post.data.description;
	const body = post.body ?? '';
	const head = TRUNCATE.test(body)
		? body.split(TRUNCATE)[0]
		: (body.split(/\n\s*\n/).find((p) => p.trim() && !p.trim().startsWith('import ')) ?? '');
	return stripMarkdown(head);
}

export function readingTime(post: Post): number {
	const words = stripMarkdown(post.body ?? '').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

function stripMarkdown(md: string): string {
	return md
		.replace(/^import .*$/gm, '')
		.replace(/```[\s\S]*?```/g, '')
		.replace(/<[^>]+>/g, '')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[*_`#>]/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}
