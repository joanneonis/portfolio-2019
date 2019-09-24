/*
* Resize your images with the image resizing api
* usage: image | transformImage('100x0')
* for all options check: https://www.storyblok.com/docs/image-service
*/

import Vue from 'vue'; // eslint-disable-line

Vue.filter('transformImage', (image, option) => {
  if (!image) return '';
  if (!option) return '';

  const imageService = '//img2.storyblok.com/';
  const path = image.replace('//a.storyblok.com', '');
  return imageService + option + path;
});
