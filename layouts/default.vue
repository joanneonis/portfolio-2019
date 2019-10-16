<template>
  <div>
    <main-nav :projects="projects" />
    <main :class="{ 'has-modal' : this.$store.state.modalIsOpen }">
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
  transition-duration: .7s;
  transition-property: opacity;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

main {
  opacity: 1;
  transition: .7s;

  &.has-modal {
    opacity: .2;
  }
}
</style>
