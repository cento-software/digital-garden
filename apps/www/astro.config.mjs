// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import wikiLinkPlugin from "@braindb/remark-wiki-link";

const base = "digital-garden"

// https://astro.build/config
export default defineConfig({
	site: 'https://cento.software',
	base,
	markdown: {
		remarkPlugins: [[wikiLinkPlugin, { linkResolver: (/** @type {string} */ name) => `/${base}/writings/${name}`}]]
	},
	integrations: [mdx(), sitemap()],
});
