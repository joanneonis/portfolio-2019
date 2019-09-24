/**
 * Env settings
 */

// eslint-disable-next-line
require('dotenv').config();

module.exports = {
  BASE_URL: process.env.BASE_URL,
  STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
  STORYBLOK_SPACE_ID: process.env.STORYBLOK_SPACE_ID,
};
