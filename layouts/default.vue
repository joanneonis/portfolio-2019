<template>
  <div>
    <main-nav :projects="projects" />
    <main>
      <nuxt />
    </main>
    <custom-cursor />
  </div>
</template>

<script>
import MainNav from '~/components/MainNav';
import CustomCursor from '~/components/CustomCursor';

export default {
  components: {
    MainNav,
    CustomCursor,
  },

  computed: {
    projects() {
      return this.$store.state.projects.data;
    },
  },
};
</script>
