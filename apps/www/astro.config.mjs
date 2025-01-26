// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import wikiLinkPlugin from "@braindb/remark-wiki-link";

// https://astro.build/config
export default defineConfig({
	site: 'https://cento.software',
	base: "digital-garden",
	markdown: {
		remarkPlugins: [wikiLinkPlugin]
	},
	integrations: [mdx(), sitemap()],
});
