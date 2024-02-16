// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@lui-ui/lui-nuxt',
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
  ],
  app: {
    head: {
      meta: [
        { charset: "utf-8", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css",
        }
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
})
