// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // _colors and _general
          additionalData:
            '@use "~/assets/_colors.scss" as *; @use "~/assets/_general.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxtjs/google-fonts", "@nuxt/icon"],
  googleFonts: {
    families: {
      Merriweather: true,
      Anton: true,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
