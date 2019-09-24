/**
 * Storyblok js client
 */

import StoryblokClient from 'storyblok-js-client';

const accessToken = process.env.STORYBLOK_ACCESS_TOKEN;

export default new StoryblokClient({
  accessToken,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});
