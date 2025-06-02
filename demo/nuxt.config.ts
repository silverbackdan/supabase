// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/supabase', '@nuxt/ui'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      supabase: {
        url: '',
        key: '',
      },
    },
  },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
