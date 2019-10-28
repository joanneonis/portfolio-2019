<template>
  <div>
    <div class="nav-bg" />
    <div
      :class="{ 'is-mobile' : browser && browser.mobile }"
      class="nav-toggle"
      @click="toggleMenu()"
    >
      <hamburger :open="navOpen" />
    </div>
    <nav
      class="main-nav"
      :class="{ 'is-open' : navOpen }"
    >
      <div class="container main-nav__inner">
        <profile-card />
        <ul class="nav-list list-unstyled">
          <li class="nav-list__item">
            <span class="nav-list__item__link">
              Discover projects
            </span>
          </li>
          <li
            v-for="(project, i) in projects"
            :key="i"
            class="nav-list__item"
            :class="{ 'is-active' : $route.path === `/${project.full_slug}` }"
          >
            <nuxt-link
              :to="`/${project.full_slug}`"
              class="nav-list__item__link"
              :class="{ 'nuxt-link-active' : $route.fullPath === '/' && i === 0 }"
            >
              {{ project.name }}
            </nuxt-link>
          </li>
        </ul>
        <div class="socials">
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
    </nav>
  </div>
</template>

<script>
import detect from 'browser-detect';
import Hamburger from '~/components/Hamburger';
import ProfileCard from '~/components/ProfileCard';
import IconLinkedin from '~/assets/img/icons/icon-linkedin.svg';

// eslint-disable-next-line no-unused-vars
const browser = detect();

export default {
  components: {
    Hamburger,
    ProfileCard,
    IconLinkedin,
  },

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      navOpen: false,
      browser: null,
    };
  },

  watch: {
    $route: function closeOnRoute() {
      this.$store.commit('setMenuState', false);
      this.navOpen = this.$store.state.menuIsOpen;
    },
  },

  mounted() {
    this.browser = browser;
  },

  methods: {
    toggleMenu() {
      this.$store.commit('setMenuState', !this.$store.state.menuIsOpen);
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bg {
  position: fixed;
  z-index: 10;
  width: 100%;
  min-height: rem(110px);
  background: linear-gradient(to bottom, theme-color(dark) 0%, rgba(theme-color(dark), 0) 100%);
}

.main-nav {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 99;

  @include media-breakpoint-down(md) {
    display: flex;
    top: 0;
    min-height: 100%;
    flex-flow: row;
    pointer-events: none;
    background: theme-color(dark);
    opacity: 0;
    transition: opacity .2s ease;

    &.is-open {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;

    @include media-breakpoint-down(md) {
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
  }
}

.nav-list {
  display: flex;
  justify-content: flex-end;

  @include media-breakpoint-down(md) {
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  &__item {
    display: flex;
    align-items: center;
    margin-right: rem(25px);
    font-size: .8em;
    text-transform: uppercase;
    letter-spacing: .16em;

    &:first-child span {
      font-style: italic;
      color: #d4d4d4;
      text-transform: none;
      letter-spacing: 1.4px;
    }

    @include media-breakpoint-down(md) {
      margin: 0;
    }

    &__link {
      position: relative;
      padding: rem(50px) rem(2px) rem(30px) rem(2px);
      color: theme-color(light);

      &::after {
        position: absolute;
        top: .7em;
        bottom: 0;
        left: -.7em;
        width: 0;
        height: 1em;
        margin: rem(50px) rem(2px) rem(30px) rem(2px);
        content: '';
        background: rgba(theme-color(light), .2);
        transition: width .5s;
        will-change: width;

        @include media-breakpoint-down(md) {
          top: -2.4em;
          left: 0;
        }
      }

      &:hover,
      &:focus {
        color: darken(theme-color(light), 15%);
      }
    }

    @include media-breakpoint-up(lg) {
      &:last-child {
        margin-right: 0;

        .nav-list__item__link {
          padding-right: 0;
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    flex-wrap: wrap;

    &__item__link {
      padding: rem(10px) rem(20px);
    }
  }
}

.nuxt-link-active::after {
  width: 112%;

  @include media-breakpoint-down(md) {
    width: 100%;
  }
}

.nav-toggle {
  position: fixed;
  top: rem(30px);
  right: rem(20px);
  z-index: 100;

  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.socials {
  margin-top: rem(40px);

  @include media-breakpoint-up(lg) {
    display: none;
  }
}

@include media-breakpoint-down(md) {
  .nav-list__item {
    opacity: 0;
    transition: none;
    transform: translateY(.75em);

    .is-open & {
      opacity: 1;
      transition: all .15s .2s;
      transform: translateY(0);
    }
  }

  @for $i from 1 through 10 {
    .nav-list__item:nth-child(#{$i}) {
      transition-delay: .15s + ($i * .05s);
    }
  }

  .socials {
    opacity: 0;
    transition: none;

    .is-open & {
      opacity: 1;
      transition: all .6s .5s;
    }
  }
}
</style>
