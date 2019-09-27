<template>
  <header class="header">
    <Marquee
      :text="backTitle"
      class="header__backtitle"
    />
    <div class="header__inner container">
      <div class="header__content">
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ intro }}
        </p>
      </div>
      <figure class="header__figure">
        <img
          :src="image"
          class="header__figure__img"
          :alt="title"
        >
        <figcaption v-if="credits">
          {{ credits }}
        </figcaption>
      </figure>
    </div>
  </header>
</template>

<script>
import Marquee from '~/components/Marquee';

export default {
  components: {
    Marquee,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    credits: {
      type: String,
      default: null,
    },
    backTitle: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes slide {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-100%, 0, 0); }
}

.header {
  position: relative;
  margin-bottom: -20vh;
  padding-top: rem(30px);

  &__inner {
    display: flex;
    min-height: 100vh;
  }

  &__backtitle {
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50vh + .5em);
    overflow: hidden;
    pointer-events: none;
  }

  &__content {
    display: flex;
    max-width: rem(600px);
    flex-flow: column;
    justify-content: center;

    p {
      max-width: 480px;
    }
  }
}

.header__figure {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100vh;

  &__img {
    width: 100%;
    height: 120vh;
    object-fit: contain;
    object-position: right;
  }

  figcaption {
    position: absolute;
    right: rem(50px);
    bottom: 0;
    font-size: rem(14px);
    font-style: italic;
    pointer-events: all;
    opacity: .6;
  }
}
</style>
