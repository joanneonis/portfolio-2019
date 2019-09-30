<template>
  <div class="user-container">
    <figure
      class="user"
      @click="toggleState()"
    >
      <img
        src="~/assets/img/mijn-hoofd.png"
        alt="Joanne Onis"
        data-target
      >
    </figure>
    <div
      :class="{ 'is-open' : isOpen }"
      class="user-card"
    >
      <div class="user-card__inner">
        <h2 class="h6">
          <span>
            Joanne Onis
          </span>
          <small>
            Frontend developer
          </small>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas non dolor facilisis, tincidunt lectus vel, ultrices arcu.
          Maecenas non dolor facilisis, tincidunt lectus vel, ultrices arcu.
        </p>
        <a
          href="/CV - Joanne Onis.pdf"
          class="button button--primary"
          target="_blank"
        >
          Curriculum vitae
        </a>
        <a
          href="https://www.linkedin.com/in/joanneonis/"
          class="button button--primary button--icon"
          target="_blank"
        >
          <icon-linkedin class="icon" />
        </a>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="clickaway"
      @click="close()"
    />
  </div>
</template>

<script>
import IconLinkedin from '~/assets/img/icons/icon-linkedin.svg';

export default {
  components: {
    IconLinkedin,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleState() {
      this.isOpen = !this.isOpen;
      this.$store.commit('setModalState', !this.$store.state.modalIsOpen);
    },

    close() {
      this.isOpen = false;
      this.$store.commit('setModalState', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  position: relative;
}

.user {
  position: relative;
  z-index: 11;
  width: rem(50px);
  margin-top: rem(35px);
  margin-bottom: 0;

  @include media-breakpoint-down(md) {
    margin-bottom: rem(20px);
  }
}

.user-card {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: 0;
  margin-left: -30px;
  overflow: hidden;
  color: theme-color(dark);
  background: theme-color(light);
  transition: all .5s ease;

  &.is-open {
    max-width: 470px;
  }
}

.user-card__inner {
  width: 350px;
  margin-left: 110px;
  padding: rem(45px) rem(40px) rem(50px) rem(40px);
  padding-left: 0;
}

.h6 {
  margin-bottom: rem(30px);
  font-family: $font-family-sans-serif;
  color: theme-color(dark);

  span {
    display: inline-block;
    width: 100%;
    line-height: 1.2;
  }

  small {
    font-size: 65%;
    color: #979797;
    text-transform: uppercase;
    letter-spacing: .9px;
  }
}

p {
  margin-bottom: rem(30px);
}

.icon {
  margin-top: rem(-3px);
}

.clickaway {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>
