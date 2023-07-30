// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/main-logo.svg' },
      ],
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
      title: 'Canteen on the Fly',
    },
  },
  components: true,
  css: [
    '@/assets/css/main.css',
    '@/assets/css/vue3-carousel-custom.css',
  ],
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
  ],
  nitro: {
    prerender: {
      routes: ['/suggest', '/restaurants', '/'],
    },
  },
  router: {
    base: '/',
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
