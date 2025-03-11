import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import viteImagemin from "vite-plugin-imagemin";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      viteImagemin({
        webp: {
          quality: 80, // Adjust quality as needed
        },
      }),
    ],
  },
  integrations: [tailwind(), sitemap(), robotsTxt()],
});
