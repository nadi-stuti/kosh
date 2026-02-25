// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import { SidebarFolders } from "./src/lib/constants/layout";
import starlightBlog from "starlight-blog";
import starlightGiscus from "starlight-giscus";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightImageZoom from "starlight-image-zoom";
import starlightTags from "starlight-tags";
import { blogAuthors } from "./src/lib/constants/authors";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      components: {
        // Override the default `MarkdownContent` component.
        Sidebar: "./src/components/Sidebar.astro",
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
          authors: blogAuthors,
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
        starlightTags(),
        starlightSidebarTopics(
          [
            {
              label: "Why rivers are polluted?",
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
              label: "Daily Drops",
              link: "/daily-drops/",
              icon: "seti:elixir",
              items: [
                {
                  label: "Daily Drops",
                  autogenerate: {
                    directory: "/daily-drops",
                    collapsed: true,
                  },
                },
              ],
            },
            {
              label: "Nadi Stuti",
              link: "/rivers/about",
              icon: "starlight",
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
          ],
          {
            exclude: ["/blog", "/tags", "/blog/**/*", "/tags/**/*"],
          },
        ),
      ],
      title: "Kosh",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        hi: {
          label: "हिन्दी",
          lang: "hi",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nadi-stuti",
        },
      ],
    }),
  ],
});
