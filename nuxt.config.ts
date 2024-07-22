// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    'nuxt-splide',
    "@nuxt/icon"
  ],
  ssr: false,
  fonts: {
    families: [
      { name: 'Raleway', provider: 'google' },
    ]

  },
  splide: {
    theme: 'default'
  }
})