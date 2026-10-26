// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://irsal-lazuard.vercel.app",
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx()],
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  build: {
    format: "directory",
  },
  image: {
    // Screenshots are processed locally with sharp at build time.
    responsiveStyles: false,
  },
});
