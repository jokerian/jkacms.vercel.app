import { defineNuxtConfig } from "nuxt/config";

// Current version of the application
export const APP_VERSION = '2.0.0';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-09",
  runtimeConfig: {
    public: {
      API_KEY: process.env.NUXT_ENV_BUTTER_API_TOKEN,
      PREVIEW: process.env.NUXT_ENV_BUTTER_PREVIEW ?? "true",
      APP_VERSION,
    },
  },
  css: [
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/main.css",
    "~/assets/css/lineicons.css",
    "~/assets/css/tiny-slider.css",
  ],
  vite: {
    optimizeDeps: {
      exclude: ["plugins/ButterCMS.ts"],
    }
  },
});