import api from '~/plugins/storyblok';

const spaceId = process.env.STORYBLOK_SPACE_ID;
const config = require('~/config/config');

export const state = () => ({
  cacheVersion: '',
  defaultLocale: config.defaultLocale,
});

export const mutations = {
  setCacheVersion(stateMutation, version) {
    const sm = stateMutation;

    sm.cacheVersion = version;
  },

  setDefaultLocale(stateMutation, locale) {
    const sm = stateMutation;

    sm.locale = locale;
  },
};

export const actions = {
  loadCacheVersion({ commit }) {
    return api.get(`cdn/spaces/${spaceId}`).then((res) => {
      commit('setCacheVersion', res.data.space.version);
    });
  },
};
