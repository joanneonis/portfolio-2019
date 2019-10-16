/**
 * Nuxt config
 */

// eslint-disable-next-line
require('dotenv').config();

const config = require('./config/config');
const build = require('./config/build');
const env = require('./config/environment');
const generate = require('./config/generate');
const head = require('./config/head');
const modules = require('./config/modules');
const plugins = require('./config/plugins');

module.exports = {
  mode: 'spa',
  env,
  head,
  loading: config.loading,
  css: config.css,
  plugins,
  modules,
  build,
  generate,
  styleResources: config.styleResources,
  axios: {
    baseURL: config.baseUrl,
  },
  router: {
    middleware: 'setCacheVersion',
    scrollBehavior: () => ({ x: 0, y: 0 }),
  },
};
