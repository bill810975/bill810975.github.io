import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entrySchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  arxivUrl: z.string().url().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export const collections = {
  blog: defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
    schema: entrySchema,
  }),
};
