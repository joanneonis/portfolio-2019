<template>
  <header class="header">
    <span class="header__backtitle back-title">
      <span class="marquee">
        <span>
          {{ backTitle }}
        </span>
      </span>
      <span class="marquee marquee--second">
        <span>
          {{ backTitle }}
        </span>
      </span>
    </span>
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
      </figure>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
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
    height: 100vh;
    object-fit: cover;
  }
}

$marquee-animation-duration: 100s;

.marquee {
  position: absolute;
  width: 100vw;
  overflow: hidden;
  white-space: nowrap;

  span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee $marquee-animation-duration linear infinite;
    will-change: transform;
    animation-delay: -($marquee-animation-duration / 2);
  }

  &--second span {
    animation-delay: 0s;
  }
}

@keyframes marquee {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-100%, 0); }
}
</style>
