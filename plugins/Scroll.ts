import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Configure router scroll behavior for Nuxt 3
  const router = useRouter()
  router.options.scrollBehavior = () => {
    return { left: 0, top: 0, behavior: 'auto' }
  }
})