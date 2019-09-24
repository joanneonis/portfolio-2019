/**
 * Generate static files
 */

import api from '../plugins/storyblok';

const config = require('../config/config');

module.exports = {
  routes(callback) {
    const { defaultLocale } = config;

    // other routes that are not in Storyblok with their slug.
    const routes = [];

    api.get('cdn/links').then((res) => {
      config.locales.forEach((locale) => {
        const language = locale.code !== defaultLocale ? `/${locale.code}` : '';
        const slash = locale.code !== defaultLocale ? '' : '/';

        Object.keys(res.data.links).forEach((key) => {
          if (res.data.links[key].slug !== 'home') {
            routes.push(`${language}/${res.data.links[key].slug}`);
          } else {
            routes.push(`${slash}${language}`);
          }
        });
      });

      callback(null, routes);
    });
  },
};
