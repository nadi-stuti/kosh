// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import { SidebarFolders } from "./src/lib/constants/layout";
import starlightBlog from "starlight-blog";
import starlightGiscus from "starlight-giscus";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      components: {
        // Override the default `MarkdownContent` component.
        MarkdownContent: "./src/components/MarkdownContent.astro",
      },
      customCss: ["./src/styles/custom.css"],
      plugins: [
        starlightImageZoom(),
        starlightBlog({
          title: "Nadi Stuti Blog",
          metrics: {
            readingTime: true,
            words: "rounded",
          },
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
        starlightGiscus({
          repo: "nadi-stuti/kosh",
          repoId: "R_kgDOQtuzhw",
          category: "General",
          categoryId: "DIC_kwDOQtuzh84C03D7",
          theme: {
            light: "gruvbox_light",
            dark: "gruvbox_dark",
            auto: "gruvbox",
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
