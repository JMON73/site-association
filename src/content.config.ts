import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    resume: z.string(),
    image: z.string().optional(),
  }),
});

const evenements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenements' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Match', 'Repas', 'Voyage', 'Assemblée générale', 'Action solidaire', 'Autre']),
    date: z.date(),
    lieu: z.string().optional(),
    familles: z.boolean().default(true),
    image: z.string().optional(),
    resume: z.string(),
    lien_inscription: z.string().optional(),
    termine: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().optional(),
    intro: z.string().optional(),
  }),
});

export const collections = { actualites, evenements, pages };