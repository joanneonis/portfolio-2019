<template>
  <div>
    <pre>
      {{ project }}
    </pre>
  </div>
</template>

<script>
// import Header from '~/components/Header';

export default {
  components: {
    // Header,
  },

  computed: {
    project() {
      const projectBySlug = this.$store.getters['projects/projectBySlug'];
      return projectBySlug(this.$route.params.slug);
    },
  },
  async fetch({ store, params }) {
    if (!store.getters['projects/isFetched']) {
      return store.dispatch('projects/fetchProjects', params.slug);
    }

    return true;
  },
};
</script>
