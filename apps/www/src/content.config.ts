import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
	loader: glob({ base: '../../docs/writings', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		topics: z.array(z.string()).optional()
	}),
});

export const collections = { writings };
