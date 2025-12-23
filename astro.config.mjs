// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nadi stuti wiki",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nadi-stuti",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Github setup", slug: "guides/github" },
          ],
        },
        {
          label: "Rivers",
          items: [
            {
              label: "Ganga",
              items: [
                { label: "Rituals", slug: "rivers/ganga/rituals" },
                {
                  label: "NGOs & Ashrams",
                  slug: "rivers/ganga/ngos-and-ashrams",
                },
              ],
            },
            {
              label: "Yamuna",
              items: [{ label: "Data", slug: "rivers/yamuna/data" }],
            },
          ],
        },
      ],
    }),
  ],
});
