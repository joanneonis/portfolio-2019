<template>
  <div>
    <div
      ref="cursor"
      class="cursor"
      :class="{ 'is--link' : hoverLink }"
    >
      <div class="cursor__back" />
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
export default {
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
    };
  },

  mounted() {
    const ctx = this;
    this.currentX = window.innerWidth / 2;
    this.currentY = window.innerHeight / 2;

    document.body.addEventListener('mousemove', (e) => {
      ctx.currentTarget = e.target;
      ctx.mouseX = e.clientX;
      ctx.mouseY = e.clientY;
    });

    // setInterval(ctx.updateCursor(), 1000 / 60);

    setInterval(() => { ctx.updateCursor(); ctx.moveCursor(ctx.currentTarget); }, 1000 / 60);
  },

  methods: {
    moveCursor(target) {
      if (target.tagName === 'A') {
        this.hoverLink = true;
      } else {
        this.hoverLink = false;
      }

      if (target.tagName === 'VIDEO' && target.controls) {
        console.log(target.paused);
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
    transition: transform .2s ease-out;
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
      background-color: theme-color(light);
      transform: scale3d(5, 5, 5);
    }
  }
}

* {
  cursor: none;
}
</style>
