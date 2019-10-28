<template>
  <div class="awards section-inset-y">
    <div class="container">
      <span>
        Award<template v-if="awards.length > 1">s</template>
      </span>

      <figure
        v-for="award in awards"
        :key="award.title"
      >
        <img
          :src="award.image"
          :alt="award.title"
        >
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    awards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

figure {
  margin: 0 rem(10px);
}

img {
  max-width: 90px;
}

span {
  margin-right: rem(20px);
  font-size: .8em;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.awards.is-active {
  animation: fade-up .75s ease both;
}
</style>
