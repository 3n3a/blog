import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Handles both "2023-12-20 13:00:00" and ISO 8601 dates
		date: z.coerce.date(),
		draft: z.boolean().default(false),
		authors: z.string().default('enk'),
		tags: z.array(z.string()).default([]),
		slug: z.string().optional(),
	}),
});

export const collections = { blog };
