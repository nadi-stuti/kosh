import { blogAuthors } from "./authors";
import type { StarlightBlogUserConfig } from "starlight-blog";

export const LOCALS = {
  root: {
    label: "English",
    lang: "en",
  },
  /**Under work */
  //   hi: {
  //     label: "हिन्दी",
  //     lang: "hi",
  //   },
};

export const OVERRIDE_COMPONENTS = {
  // Override the default `MarkdownContent` component.
  Sidebar: "./src/components/override/Sidebar.astro",
  MarkdownContent: "./src/components/override/MarkdownContent.astro",
};

export const CUSTOM_CSS = ["./src/styles/custom.css"];

export const GISCUSS = {
  repo: "nadi-stuti/kosh",
  repoId: "R_kgDOQtuzhw",
  category: "General",
  categoryId: "DIC_kwDOQtuzh84C03D7",
  theme: {
    light: "gruvbox_light",
    dark: "gruvbox_dark",
    auto: "gruvbox",
  },
};

export const BLOG: StarlightBlogUserConfig = {
  title: "Nadi Stuti Blog",
  metrics: {
    readingTime: true,
    words: "rounded",
  },
  authors: blogAuthors,
};

export const SOCIALS: Array<{ icon: "github"; label: string; href: string }> = [
  {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/nadi-stuti",
  },
];
