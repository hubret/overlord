import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxt) => {
  nuxt.hooks.hook('strapi:error', (e) => {
    nuxt.$toast.error({ title: e.error.name, description: e.error.message })
  })
})
