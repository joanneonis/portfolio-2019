/* eslint-disable no-unused-vars */
import Splitting from 'splitting';
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

Vue.directive('split-lines', {
  inserted: (el, binding) => {
    const setting = binding.value || 'lines';

    Splitting({
      target: el,
      by: setting,
      whitespace: false,
    });
  },
});
