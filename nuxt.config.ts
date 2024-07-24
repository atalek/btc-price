// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  runtimeConfig: {
    public: {
      gtagId: process.env.GTAG_ID,
    },
  },

  compatibilityDate: '2024-07-24',
})