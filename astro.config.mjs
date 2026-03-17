// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";
import starlightGiscus from "starlight-giscus";
import starlightImageZoom from "starlight-image-zoom";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightTags from "starlight-tags";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import { ExcludeTopics, SidebarTopics } from "./src/lib/constants/layout";

import react from "@astrojs/react";
import {
  BLOG,
  CUSTOM_CSS,
  FONTS,
  GISCUSS,
  LOCALS,
  OVERRIDE_COMPONENTS,
  SOCIALS,
} from "./src/lib/constants/configs";

export default defineConfig({
  fonts: FONTS,
  integrations: [
    starlight({
      components: OVERRIDE_COMPONENTS,
      customCss: CUSTOM_CSS,
      plugins: [
        starlightImageZoom(),
        starlightBlog(BLOG),
        starlightGiscus(GISCUSS),
        starlightThemeFlexoki({
          accentColor: "yellow",
        }),
        starlightTags(),
        starlightSidebarTopics(SidebarTopics, ExcludeTopics),
      ],
      title: "NadiKosh",
      logo: {
        dark: "./src/assets/wikilogo_dark.jpg",
        light: "./src/assets/wikilogo_light.jpg",
        replacesTitle: true,
      },
      locales: LOCALS,
      social: SOCIALS,
    }),
    react(),
  ],
});
