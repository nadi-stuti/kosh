// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import gruvbox from "starlight-theme-gruvbox";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import { SidebarFolders } from "./src/lib/constants/layout";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
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
        { slug: "layout" },
        { slug: "print" },
        { label: "Contribute", slug: "contribute" },
      ],
    }),
  ],
});
