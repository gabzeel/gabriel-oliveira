// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site: "https://gabzeel.dev",
  base,
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
