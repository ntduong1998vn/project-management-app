// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:3000/api",
    },
  },
});
