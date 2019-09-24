import api from '~/plugins/storyblok';

export const state = () => ({
  data: [],
  fetched: false,
});

export const mutations = {
  set(stateMutation, data) {
    const sm = stateMutation;

    sm.data = data;
    sm.fetched = true;
  },
};

export const actions = {
  async fetchProjects({ commit, rootState }) {
    const locale = rootState.i18n.locale !== rootState.defaultLocale ? `${rootState.i18n.locale}/` : '';

    const response = await api.get('cdn/stories', {
      starts_with: `${locale}`,
      filter_query: {
        component: {
          in: 'project',
        },
      },
    });

    const { stories } = response.data;

    commit('set', stories);
  },
};

export const getters = {
  projectBySlug: stateProjects => slug => stateProjects.data.find(story => slug === story.slug),
  isFetched: stateFetched => !!stateFetched.fetched,
};
