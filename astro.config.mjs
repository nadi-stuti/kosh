// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import { SidebarFolders } from "./src/lib/constants/layout";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightBlog({
          title: "Nadi Stuti Blog",
          authors: {
            nulligma: {
              name: "Shantanu Kulkarni",
              title: "Nadi Sevak",
              picture:
                "https://pbs.twimg.com/profile_images/722045969936703488/bLHK_LbW_400x400.jpg",
              url: "https://x.com/Nulligma/",
            },
          },
        }),
        starlightThemeFlexoki({
          accentColor: "yellow",
        }),
      ],
      title: "Kosh",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nadi-stuti",
        },
      ],

      sidebar: [
        ...SidebarFolders,
        { slug: "about-nadikosh" },
        { slug: "print" },
        { label: "How we work", slug: "how-we-work" },
        { label: "Contribute", slug: "contribute" },
        { slug: "layout" },
        { slug: "updates" },
      ],
    }),
  ],
});
