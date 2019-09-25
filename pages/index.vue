<template>
  <section>
    <project-page :project-slug="project.slug" />
  </section>
</template>

<script>
import ProjectPage from '~/pages/projects/_slug/index';

export default {
  components: {
    ProjectPage,
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
