/**
 * Nuxt.js modules
 */

const config = require('../config/config');

module.exports = [
  '@nuxtjs/axios',
  '@nuxtjs/dotenv',
  'nuxt-svg-loader',
  ['@nuxtjs/markdownit', { injected: true }],
  ['nuxt-rfg-icon', {
    masterPicture: 'static/favicon.png',
    rfg: {
      masterPicture: 'static/favicon.png',
      design: {
        ios: {
          pictureAspect: 'backgroundAndMargin',
          backgroundColor: '#000000',
          margin: '14%',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true,
          },
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#000000',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false,
            },
          },
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true,
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false,
          },
        },
        safariPinnedTab: {
          pictureAspect: 'silhouette',
          themeColor: '#f4182f',
        },
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false,
      },
    },
  }],

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
];
