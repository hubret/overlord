// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi'],
  plugins: ['~/plugins/strapi.client'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    // prefix: '/api',
    // version: 'v4',
    // cookie: {},
    // cookieName: 'strapi_jwt'
  }
})
