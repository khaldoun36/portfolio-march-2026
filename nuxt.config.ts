import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/css/main.css"],
  fonts: {
    families: [
      {
        name: "Montserrat",
        src: "/fonts/Montserrat.woff2",
        weight: "100 900",
      },
      {
        name: "CabinetGrotesk",
        src: "/fonts/CabinetGrotesk.woff2",
        weight: "100 900",
      },
    ],
  },
});
