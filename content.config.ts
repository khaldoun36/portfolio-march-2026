// content.config.ts
import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    journal: defineCollection({
      type: "page",
      source: "journal/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.union([z.string(), z.date()]),
        category: z.string(),
        // SEO Only Fields:
        image: z.string().optional(),
        author: z.string().default("Khaldoun Alnuaimi"),
        tags: z.array(z.string()).default([]),
      }),
    }),
  },
});
