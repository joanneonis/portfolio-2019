/**
 * Config
 */
const en = require('../locales/en');

const themeColor = '#fff';

module.exports = {
  // base
  themeColor,
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',

  // locales
  en,
  defaultLocale: 'en',
  numberFormats: {
    en: {
      currency: {
        style: 'currency', currency: 'USD',
      },
    },
  },
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
    },
  ],

  // css
  css: [
    '~assets/scss/main.scss',
  ],

  styleResources: {
    scss: [
      '~assets/scss/functions/*.scss',
      '~assets/scss/mixins/*.scss',
      '~assets/scss/_config.scss',
      '~assets/scss/placeholders/*.scss',
      '~assets/scss/bootstrap/_variables.scss',
    ],
  },

  // loading
  loading: { color: themeColor },
};
