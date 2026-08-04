import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    resume: z.string(),
    image: image().optional(),
  }),
});

const evenements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenements' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    type: z.enum(['Match/Voyage', 'Repas', 'Assemblée générale', 'Action solidaire', 'Autre']),
    date: z.date(),
    lieu: z.string().optional(),
    familles: z.boolean().default(true),
    image: image().optional(),
    resume: z.string(),
    termine: z.boolean().default(false),
  }),
});

const anciens = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/anciens' }),
  schema: ({ image }) => z.object({
    nom: z.string(),
    photo: image().optional(),
    periode: z.string().optional(),
    poste: z.string().optional(),
  }),
});

const galeries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galeries' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    ordre: z.number().default(1),
    photos: z.array(image()),
  }),
});

const partenaires = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partenaires' }),
  schema: ({ image }) => z.object({
    nom: z.string(),
    logo: image(),
    site: z.string().optional(),
    niveau: z.enum(['Principal', 'Secondaire']),
  }),
});

const histoire = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/histoire' }),
  schema: ({ image }) => z.object({
    annee: z.string(),
    titre: z.string(),
    ordre: z.number().default(1),
    photo: image().optional(),
  }),
});

const bureau = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bureau' }),
  schema: ({ image }) => z.object({
    nom: z.string(),
    fonction: z.string(),
    groupe: z.enum(['Bureau', "Conseil d'administration"]).default('Bureau'),
    photo: image().optional(),
    ordre: z.number().default(1),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().optional(),
    intro: z.string().optional(),
  }),
});

export const collections = { actualites, evenements, anciens, galeries, partenaires, histoire, bureau, pages };