<template>
  <span class="back-title">
    <span class="marquee marquee--reverse">
      <span>
        {{ text }} &nbsp;
      </span>
    </span>
    <span class="marquee marquee--reverse marquee--second">
      <span>
        {{ text }} &nbsp;
      </span>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'test',
    },
  },

  data() {
    return {
      checkScrollSpeed: null,
    };
  },

  mounted() {
    // listen to "scroll" event
    // const ctx = this;

    this.checkScrollSpeed = ((settings) => {
      // eslint-disable-next-line no-param-reassign
      settings = settings || {};

      let lastPos;
      let newPos;
      let timer;
      let delta;
      const delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

      function clear() {
        lastPos = null;
        delta = 0;
      }

      clear();

      return () => {
        newPos = window.scrollY;
        if (lastPos != null) { // && newPos < maxScroll
          delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
    })();

    // TODO
    window.onscroll = () => {
      // console.log(ctx.checkScrollSpeed());
    };
  },
  methods: {
    //
  },
};
</script>
