<template>
  <div
    class="hamburger"
    :class="{ 'is-active' : isOpen }"
  >
    <div class="hamburger__container">
      <div class="hamburger__inner" />
      <div class="hamburger__hidden" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    themeColor: {
      type: String,
      default: 'red',
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  watch: {
    open: function toggleState(state) {
      this.isOpen = state;
    },
  },
};
</script>

<style lang="scss" scoped>
$h-padding: 10px;
$h-width: 24px;
$h-height: 16px;
$h-background-color: transparent;
$h-line-color: theme-color(light);
$h-hover-line-color: theme-color(secondary);
$h-line-height: 2px;
$h-border-radius: 4px;
$h-transition-time: .4s;
$h-transition-function: ease;
$h-transition-opacity: 0;
$h-vertical-gap: 8px;
$h-initial-opposition: 5px;
$h-hide-distance: $h-width + $h-padding;

@mixin line-props {
  position: absolute;
  width: 100%;
  height: $h-line-height;
  background-color: $h-line-color;
  border-radius: $h-border-radius;
  transition-timing-function: ease;
  transition-duration: $h-transition-time, $h-transition-time, .1s;
  transition-property: transform, opacity, background;
}

.hamburger {
  display: inline-block;
  padding: rem($h-padding);
  overflow: hidden;
  cursor: pointer;
  background-color: $h-background-color;

  &__container {
    position: relative;
    width: rem($h-width);
    height: rem($h-height);
    margin-right: rem(5px);
  }

  &__inner {
    @include line-props();

    top: 50%;
    opacity: 1;
    transform: translate(rem($h-initial-opposition), -50%);

    &::before,
    &::after {
      @include line-props();

      content: '';
      opacity: 1;
      transform: translate(-#{rem($h-initial-opposition)}, 0);
    }

    &::before {
      top: rem(-$h-vertical-gap);
    }

    &::after {
      top: rem($h-vertical-gap);
    }
  }

  &__hidden {
    @include line-props();

    top: 50%;
    background-color: $h-hover-line-color;
    opacity: 0;
    transform: translate(#{rem($h-hide-distance)}, -50%);
    transform-origin: right;

    &::before,
    &::after {
      @include line-props();

      content: '';
      background-color: $h-hover-line-color;
      transform: translate(#{rem($h-hide-distance) * 2}, 0);
    }

    &::before {
      top: -#{$h-vertical-gap};
    }

    &::after {
      top: $h-vertical-gap;
    }
  }

  // stay white on mobile & in active
  .is-mobile &__hidden,
  .is-active &__hidden {
    background-color: $h-line-color;

    &::before,
    &::after {
      background-color: $h-line-color;
    }
  }

  .is-mobile &__inner,
  &:hover &__inner {
    opacity: $h-transition-opacity;
    transform: translate(-#{$h-hide-distance}, 50%);

    &::before,
    &::after {
      opacity: $h-transition-opacity;
      transform: translate(#{$h-hide-distance * 2}, 0);
    }
  }

  .is-mobile &__hidden,
  &:hover &__hidden { //
    opacity: 1;
    transform: translate(0, -50%);

    &::before,
    &::after {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  &.is-active &__inner {
    display: none;
  }

  &.is-active &__hidden {
    background: transparent;
    opacity: 1;
    transform: translate(0, 25%) rotate(45deg);

    &::before {
      transform: translate(0, #{$h-vertical-gap}) rotate(90deg);
      transform-origin: center;
    }

    &::after {
      transform: translate(0, -#{$h-vertical-gap}) rotate(0);
      transform-origin: center;
    }
  }

  // &.is-white {
  //   .hamburger__hidden,
  //   .hamburger__inner {
  //     width: 89%;
  //     background-color: $h-line-color;

  //     &::before,
  //     &::after {
  //       background-color: $h-line-color;
  //     }

  //     &::before {
  //       top: rem(-6px);
  //     }

  //     &::after {
  //       top: rem(6px);
  //     }
  //   }
  // }
}
</style>
