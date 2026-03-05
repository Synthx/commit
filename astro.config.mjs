// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://commit.pinpin.dev/",
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
});
