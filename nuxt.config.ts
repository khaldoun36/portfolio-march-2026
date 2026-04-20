import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@nuxtjs/mdc"],
    },
  },
  css: ["./app/assets/css/main.css"],
  fonts: {
    families: [
      {
        name: "Oswald",
        src: "/fonts/Oswald.woff2",
        weight: "100 900",
      },
      {
        name: "SourceSerif",
        src: "/fonts/SourceSerif.woff2",
        weight: "100 900",
      },
    ],
  },
});
