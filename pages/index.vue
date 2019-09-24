<template>
  <section>
    <Header
      :title="project.content.title"
      :back-title="project.content.title_back"
      :intro="project.content.intro"
      :image="project.content.header"
    />
  </section>
</template>

<script>
import Header from '~/components/Header';

export default {
  components: {
    Header,
  },

  computed: {
    projects() {
      return this.$store.state.projects.data;
    },

    project() {
      return this.$store.state.projects.data[0];
    },
  },
  async fetch({ store }) {
    if (!store.getters['projects/isFetched']) {
      return store.dispatch('projects/fetchProjects');
    }

    return true;
  },
};
</script>
