// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://gabzeel.dev",
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
