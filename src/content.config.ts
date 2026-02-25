import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "starlight-blog/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) =>
        blogSchema(context).merge(
          z.object({
            giscus: z.boolean().optional().default(true),
            social_read: z.array(z.string()).optional().nullable(),
            social_watch: z.array(z.string()).optional().nullable(),
            social_connect: z.array(z.string()).optional().nullable(),
          }),
        ),
    }),
  }),
};
