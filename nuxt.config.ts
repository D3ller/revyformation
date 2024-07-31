// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      name: 'RevyFormation'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]

    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    'nuxt-splide',
    "@nuxt/icon",
    "@nuxtjs/robots"
  ],
  ssr: false,
  fonts: {
    families: [
      { name: 'Raleway', provider: 'google' },
    ]

  },
  splide: {
    theme: 'default'
  },
  site: {indexable: false}
})