/**
 * Build configuration
 */

// Reason eslint ignore: import/no-extraneous-dependencies: Forbid the use of extraneous packages
// eslint-disable-next-line
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  extend(config, ctx) {
    const conf = config;
    if (ctx.isDev && ctx.isClient) {
      // Run ESLint on save
      conf.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      });

      // Stylelint
      conf.plugins.push(new StylelintPlugin({
        files: [
          '**/*.vue',
          '**/*.scss',
        ],
      }));
    }

    // fs dotenv
    conf.node = {
      fs: 'empty',
    };
  },

  transpile: [/^vue2-google-maps($|\/)/],
};
