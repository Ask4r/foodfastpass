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
    '@vite-pwa/nuxt',
  ],
  nitro: {
    prerender: {
      routes: [ '/', '/suggest', '/restaurants' ],
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'FoodFastPass',
      short_name: 'FoodFastPass',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: [ '**/*.{js,css,html,png,svg,ico}' ],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [ /^\/$/ ],
      type: 'module',
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
