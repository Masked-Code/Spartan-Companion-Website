export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    // ... options
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/*' ],
      cookieRedirect: false,
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    "@nuxt/ui",
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@nuxt/content'
  ]
})