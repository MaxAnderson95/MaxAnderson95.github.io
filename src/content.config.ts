import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
