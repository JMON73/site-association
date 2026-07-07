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

const anciens = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/anciens' }),
  schema: z.object({
    nom: z.string(),
    photo: z.string().optional(),
    periode: z.string(),
    poste: z.string().optional(),
  }),
});

const galeries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galeries' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    photos: z.array(z.string()),
  }),
});

const partenaires = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partenaires' }),
  schema: z.object({
    nom: z.string(),
    logo: z.string(),
    site: z.string().optional(),
    niveau: z.enum(['Principal', 'Secondaire']),
  }),
});

const histoire = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/histoire' }),
  schema: z.object({
    annee: z.string(),
    titre: z.string(),
    ordre: z.number().default(1),
    photo: z.string().optional(),
  }),
});

const bureau = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bureau' }),
  schema: z.object({
    nom: z.string(),
    fonction: z.string(),
    photo: z.string().optional(),
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