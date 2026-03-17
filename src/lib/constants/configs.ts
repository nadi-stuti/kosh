import { blogAuthors } from "./authors";
import type { StarlightBlogUserConfig } from "starlight-blog";
import { fontProviders } from "astro/config";
import type { AstroUserConfig } from "astro";

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

const overridepath = "./src/components/override/";

export const OVERRIDE_COMPONENTS = {
  // Override the default `MarkdownContent` component.
  Sidebar: `${overridepath}Sidebar.astro`,
  MarkdownContent: `${overridepath}MarkdownContent.astro`,
  Head: `${overridepath}Head.astro`,
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

export const FONTS: AstroUserConfig["fonts"] = [
  {
    provider: fontProviders.google(),
    name: "Libre Baskerville",
    cssVariable: "--font-libre",
    subsets: ["latin"],
    weights: [400, 500, 700], // ✅ Works perfectly with numbers
  },
  {
    provider: fontProviders.google(),
    name: "Yatra One",
    cssVariable: "--font-yatra",
    subsets: ["devanagari", "latin"],
    weights: [400],
  },
  {
    provider: fontProviders.google(),
    name: "Noto Serif Devanagari",
    cssVariable: "--font-noto",
    subsets: ["devanagari", "latin"],
    weights: [400, 500, 600, 700],
  },
  {
    provider: fontProviders.google(),
    name: "Mukta",
    cssVariable: "--font-mukta",
    subsets: ["devanagari", "latin"],
    weights: [400, 500, 600, 700],
  },
];
