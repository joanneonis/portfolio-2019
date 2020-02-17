/**
 * Nuxt.js modules
 */

const config = require('../config/config');

module.exports = [
  '@nuxtjs/axios',
  '@nuxtjs/dotenv',
  'nuxt-svg-loader',
  ['@nuxtjs/markdownit', { injected: true }],

  [
    'nuxt-i18n',
    {
      locales: config.locales,
      parsePages: true,
      defaultLocale: config.defaultLocale,
      vueI18n: {
        fallbackLocale: config.defaultLocale,
        numberFormats: config.numberFormats,
        messages: {
          de: config.de,
          en: config.en,
          se: config.se,
        },
      },
      baseUrl: config.baseUrl,
    },
  ],

  '@nuxtjs/style-resources',
  ['@nuxtjs/google-analytics', {
    id: 'UA-45807748-1',
  }],
];
