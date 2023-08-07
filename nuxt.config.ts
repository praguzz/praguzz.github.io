// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro:{
    prerender:{
      crawlLinks: true,
      failOnError: false, //This is bad!
    }
  },
  css: ['assets/css/main.css'],
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
