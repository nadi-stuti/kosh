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
            social: z
              .object({
                whatsapp: z.string().optional(),
                x: z.string().optional(),
                facebook: z.string().optional(),
                instagram: z.string().optional(),
                youtube: z.string().optional(),
                sharechat: z.string().optional(),
                github: z.string().optional(),
                reddit: z.string().optional(),
                reel: z.string().optional(),
              })
              .optional()
              .nullable(),
          }),
        ),
    }),
  }),
};
