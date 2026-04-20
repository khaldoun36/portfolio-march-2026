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

  image: {
    // Matches Nuxt/Tailwind breakpoints
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },

    quality: 80,

    // Default format order for <NuxtPicture>
    // AVIF first when supported, WebP fallback
    format: ["avif", "webp"],

    presets: {
      content: {
        modifiers: {
          quality: 80,
          fit: "cover",
        },

        // Matches your content column
        // < 640px: viewport minus 2rem outer margins
        // 640px–1279px: viewport minus 6rem total (2rem outer gutters + 1rem breakout each side)
        // >= 1280px: capped content width
        sizes:
          "(max-width: 639px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 6rem), 72rem",
      },

      full: {
        modifiers: {
          quality: 80,
          fit: "cover",
        },

        // Full-width lane in your grid
        sizes: "100vw",
      },

      contain: {
        modifiers: {
          quality: 80,
          fit: "contain",
        },
        sizes:
          "(max-width: 639px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 6rem), 72rem",
      },
    },
  },
});
