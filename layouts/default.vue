<template>
  <div>
    <main-nav :projects="projects" />
    <main>
      <transition
        name="fade"
        mode="out-in"
      >
        <nuxt />
      </transition>
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

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-timing-function: ease;
  transition-duration: .3s;
  transition-property: opacity;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
