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
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.menuIsOpen ? 'overflow-hidden' : '',
      },
    };
  },

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
