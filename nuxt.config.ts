export default defineNuxtConfig({
  css: [
    '~/assets/_colors.scss',
    '~/assets/_fonts.scss',
    '~/assets/_base.scss',

    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primevue/resources/primevue.min.css"
  ],
  build: {
    transpile: ["primevue"]
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [
        //{ rel: 'stylesheet', href: '/static/styles/main.css' }
      ]
    },
  }
})
