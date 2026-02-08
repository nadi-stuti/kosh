// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import { SidebarFolders } from "./src/lib/constants/layout";
import starlightBlog from "starlight-blog";
import starlightGiscus from "starlight-giscus";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
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

        starlightSidebarTopics([
          {
            label: "Why rivers are polluted?😢",
            link: "/guides/github",
            icon: "warning",
            items: ["guides/github", "guides/developer-guide"],
          },
          {
            label: "Join the effort",
            link: "/papers/about",
            icon: "seti:bicep",
            items: ["papers/about"],
          },
          {
            label: "Our holy rivers",
            link: "/rivers/about",
            icon: "heart",
            items: [
              {
                label: "Guides",
                autogenerate: {
                  directory: "/rivers",
                  collapsed: true,
                },
              },
            ],
          },
          {
            label: "Nadi Stuti",
            link: "/rivers/about",
            icon: "star",
            items: [
              {
                label: "Guides",
                autogenerate: {
                  directory: "/rivers",
                  collapsed: true,
                },
              },
            ],
          },
          {
            label: "Thinking Grounds",
            link: "/thinking-grounds/about",
            icon: "seti:smarty",
            items: [
              {
                label: "Thinking Grounds",
                autogenerate: {
                  directory: "/thinking-grounds",
                  collapsed: true,
                },
              },
            ],
          },
        ]),
      ],
      title: "Kosh",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nadi-stuti",
        },
      ],
      // sidebar: [
      //   ...SidebarFolders,
      //   { slug: "about-nadikosh" },
      //   { slug: "print" },
      //   { label: "How we work", slug: "how-we-work" },
      //   { label: "Contribute", slug: "contribute" },
      //   { slug: "layout" },
      //   { slug: "updates" },
      // ],
    }),
  ],
});
