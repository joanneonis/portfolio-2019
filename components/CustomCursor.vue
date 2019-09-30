<template>
  <div v-if="!isMobile">
    <div
      ref="cursor"
      class="cursor"
      :class="{ 'is--link' : hoverLink }"
    >
      <div
        class="cursor__back"
        :class="{ 'has-icon' : !noVideo }"
      />
      <div class="cursor__icon">
        <icon-play
          class="icon"
          :class="{ 'is-active' : videoPaused && !noVideo, 'is-passive' : !videoPaused || noVideo }"
        />
        <icon-pause
          class="icon"
          :class="{ 'is-active' : !videoPaused && !noVideo, 'is-passive' : videoPaused || noVideo }"
        />
      </div>
    </div>
    <div
      ref="pointer"
      class="cursor-pointer"
      :class="{ 'is--link' : hoverLink }"
    >
      <div class="cursor-pointer__inner" />
    </div>
  </div>
</template>

<script>
import detect from 'browser-detect';
import iconPlay from '~/assets/img/icons/icon-play.svg';
import iconPause from '~/assets/img/icons/icon-pause.svg';

const browser = detect();

export default {
  components: {
    iconPlay,
    iconPause,
  },

  data() {
    return {
      mouseX: null,
      mouseY: null,
      currentX: 0,
      currentY: 0,
      w: 40,
      h: 40,
      hoverLink: false,
      currentTarget: null,
      noVideo: true,
      videoPaused: false,
      isMobile: false,
    };
  },

  mounted() {
    this.isMobile = browser.mobile;

    if (!this.isMobile) {
      this.init();
    }
  },

  methods: {
    init() {
      const ctx = this;
      this.currentX = window.innerWidth / 2;
      this.currentY = window.innerHeight / 2;

      document.body.addEventListener('mousemove', (e) => {
        ctx.currentTarget = e.target;
        ctx.mouseX = e.clientX;
        ctx.mouseY = e.clientY;
      });

      window.onscroll = () => {
        // console.log(e);
        // document.body.dispatchEvent(new Event('mousemove'));
      };

      // setInterval(ctx.updateCursor(), 1000 / 60);

      setInterval(() => { ctx.updateCursor(); ctx.moveCursor(ctx.currentTarget); }, 1000 / 60);
    },

    moveCursor(target) {
      if (!target) { return; }

      if (target.tagName === 'A' || target.hasAttribute('data-target')) {
        this.hoverLink = true;
      } else {
        this.hoverLink = false;
      }

      if (target.tagName === 'VIDEO' && target.controls) {
        this.videoPaused = target.paused;
        this.noVideo = false;
      } else {
        this.noVideo = true;
      }
    },

    lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    },

    updateCursor() {
      if (!this.$refs.pointer || !this.$refs.cursor) return;

      const pl = this.mouseX - 5 / 2;
      const pt = this.mouseY - 5 / 2;
      this.$refs.pointer.style.transform = `translate3d(${pl}px, ${pt}px, 0)`;

      this.currentX = this.lerp(this.currentX, this.mouseX, 0.1);
      this.currentY = this.lerp(this.currentY, this.mouseY, 0.1);

      const l = this.currentX - this.w / 2;
      const t = this.currentY - this.h / 2;

      this.$refs.cursor.style.transform = `translate3d(${l}px, ${t}px, 0)`;
    },
  },
};
</script>

<style lang="scss">
$cursor-size: 40px;
$pointer-size: 6px;

%container {
  position: fixed;
  top: 0;
  z-index: 999;
  pointer-events: none;
}

.cursor {
  @extend %container;

  &__back {
    width: rem($cursor-size);
    height: rem($cursor-size);
    background-color: rgba(theme-color(dark), .3);
    border: 1px solid rgba(theme-color(light), .8);
    border-radius: rem($cursor-size);
    transition: transform .2s ease;

    &.has-icon {
      transform: scale3d(1.5, 1.5, 1.5);
    }
  }

  &.is--link {
    .cursor__back {
      transform: scale3d(0, 0, 0);
    }
  }
}

.cursor-pointer {
  @extend %container;

  &__inner {
    width: rem($pointer-size);
    height: rem($pointer-size);
    background: theme-color(primary);
    border-radius: rem(300px);
    transition: background .2s ease-out, transform .2s cubic-bezier(.3, .04, .38, 1.76);
  }

  &.is--link {
    .cursor-pointer__inner {
      z-index: 5;
      // background-color: theme-color(light);
      background-color: transparent;
      transform: scale3d(3, 3, 3);
      backdrop-filter: invert(90%);
    }
  }
}

* {
  cursor: none;
}

.cursor__icon .icon {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: rem(20px);
  height: auto;
  margin: auto;
  opacity: 0;
  transition: all .2s ease;
  transform: scale3d(.3, .3, .3);
  transform-origin: center;

  &.is-active {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }

  * {
    fill: theme-color(light);
  }
}
</style>
