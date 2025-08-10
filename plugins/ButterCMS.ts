import Butter from "buttercms";
import {defineNuxtPlugin, useRuntimeConfig} from "#app";

// Define a type for the Butter instance since ButterStatic is no longer exported
export let butterCMS: any | undefined = undefined;

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  try {
    const apiKey = String(config.public.API_KEY);
    const preview = config.public.PREVIEW !== "false";
    butterCMS = Butter(apiKey, {testMode: preview});
  } catch (error) {
    console.error(error);
  }

  nuxtApp.provide('butterCMS', butterCMS)
  nuxtApp.vueApp.provide('butterCMS', butterCMS)
})

