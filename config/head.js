/**
 * Headers of the page
 */

const pkg = require('../package');

module.exports = {
  title: pkg.name,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#000000' },
    { hid: 'description', name: 'description', content: pkg.description },
    { hid: 'og:image', name: 'og:image', content: '/static/share-image.jpg' },
    { hid: 'robots', name: 'robots', content: 'index' },
  ],
};
