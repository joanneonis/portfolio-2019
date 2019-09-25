<template>
  <section class="project-cta">
    <div class="container section-inset-y text-center">
      <a
        :href="link.url"
        class="button-link button-link--icon"
        target="_blank"
      >
        View live project
        <icon-target class="icon icon--target" />
      </a>
    </div>
  </section>
</template>

<script>
import IconTarget from '@/assets/img/icons/icon-target.svg';

export default {
  components: {
    IconTarget,
  },

  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-cta {
  background-color: theme-color(primary-800);
}
</style>
