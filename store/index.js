import api from '~/plugins/storyblok';

const spaceId = process.env.STORYBLOK_SPACE_ID;
const config = require('~/config/config');

export const state = () => ({
  cacheVersion: '',
  defaultLocale: config.defaultLocale,
  menuIsOpen: false,
  modalIsOpen: false,
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

  setMenuState(stateMutation, boolean) {
    const sm = stateMutation;

    sm.menuIsOpen = boolean;
  },

  setModalState(stateMutation, boolean) {
    const sm = stateMutation;

    sm.modalIsOpen = boolean;
  },
};

export const actions = {
  loadCacheVersion({ commit }) {
    return api.get(`cdn/spaces/${spaceId}`).then((res) => {
      commit('setCacheVersion', res.data.space.version);
    });
  },
  async nuxtServerInit({ commit }) {
    commit('projects/fetchProjects');
  },
};
