<template>
  <header class="header">
    <Marquee
      :text="backTitle"
      class="header__backtitle"
    />
    <div class="header__inner container">
      <div class="header__content">
        <h1
          v-split-lines="'chars'"
          class="animate--chars"
        >
          {{ title }}
        </h1>
        <p
          v-split-lines
          class="animate--lines"
        >
          {{ intro }}
        </p>
        <div class="project-info mt-4">
          <spec-list
            v-if="specs"
            :specs="specs[0]"
          />
        </div>
      </div>
      <figure class="header__figure">
        <!-- <picture>
          <source
            media="(min-width: 900px)"
            :srcset="image | transformImage('1600x0')"
          >
          <source
            media="(min-width: 600px)"
            :srcset="image | transformImage('900x0')"
          >
          <img
            :src="image | transformImage('600x0')"
            class="header__figure__img"
            :alt="title"
          >
        </!-->
        <v-lazy-image
          class="header__figure__img"
          :src="image | transformImage('1600x0')"
          :src-placeholder="image | transformImage('70x0')"
        />
        <figcaption v-if="credits">
          {{ credits }}
        </figcaption>
      </figure>
    </div>
  </header>
</template>

<script>
import Marquee from '~/components/Marquee';
import SpecList from '~/components/SpecList';

export default {
  components: {
    Marquee,
    SpecList,
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
    specs: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const header = document.querySelector('.header');
      const headerBackground = document.querySelector('.header__figure');
      const { height } = header.getBoundingClientRect();
      const opacity = 1 - (scrollPos / height * 2);

      headerBackground.style.opacity = opacity > 0 ? opacity : 0;
    });
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
    max-width: none;
    height: 120vh;
    object-fit: cover;
    object-position: right;

    @include media-breakpoint-down(lg) {
      opacity: .6;
    }
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
