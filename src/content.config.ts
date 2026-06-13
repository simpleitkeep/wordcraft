import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const englishNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/english-notes' }),
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    classLevel: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { 'english-notes': englishNotes };