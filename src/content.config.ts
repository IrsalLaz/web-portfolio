import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number(),
    summary: z.string(),
    description: z.string(),
    status: z.string().optional(),
    card: z.object({
      problem: z.string(),
      role: z.string(),
      tech: z.array(z.string()),
      highlight: z.string(),
    }),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
});

export const collections = { projects };
