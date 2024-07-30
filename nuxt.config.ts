// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
      '~/assets/css/main.css',
      '~/assets/css/fonts.css',
      '~/assets/css/scrollbar.css',
      '~/assets/css/toast.css'
  ],

  modules: ['@pinia/nuxt'],

  pinia: {
      storesDirs: ['./stores/**']
  },

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {}
      }
  },

  build: {
      transpile: ['vue-toastification']
  },

  compatibilityDate: '2024-07-30'
});