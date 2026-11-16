// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { defineConfig, fontProviders } from 'astro/config';
import { admonitions } from './src/plugins/admonitions.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.3n3a.ch',
	// Matches the old Docusaurus setup (trailingSlash: false → /post.html served as /post)
	trailingSlash: 'never',
	build: {
		format: 'file',
	},
	integrations: [mdx(), sitemap()],
	markdown: {
		// Docusaurus-style :::warning admonitions
		processor: satteri({
			features: { directive: true },
			mdastPlugins: [admonitions],
		}),
		shikiConfig: {
			theme: 'github-light',
			wrap: false,
		},
	},
	fonts: [
		{
			// Same pixel font as 3n3a.ch headings
			provider: fontProviders.local(),
			name: 'Silkscreen',
			cssVariable: '--font-silkscreen',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/silkscreen.woff2', './src/assets/fonts/silkscreen.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
