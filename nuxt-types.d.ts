// Type definitions for Nuxt 3 auto-imports
// This helps TypeScript recognize automatically imported composables

declare function useRouter(): any;
declare function useRoute(): any;
declare function useAsyncData<T>(key: string, handler: () => Promise<T>): Promise<{ data: Ref<T> }>;
declare function useNuxtApp(): any;
declare function defineNuxtRouteMiddleware(middleware: Function): any;