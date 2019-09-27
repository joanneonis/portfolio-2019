<template>
  <div>
    <div class="nav-bg" />
    <nav class="main-nav">
      <ul class="nav-list container list-unstyled">
        <li class="nav-list__item">
          <span class="nav-list__item__link">
            Projects
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
          >
            {{ project.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bg {
  position: fixed;
  width: 100%;
  min-height: rem(110px);
  background: linear-gradient(to bottom, theme-color(dark) 0%, rgba(theme-color(dark), 0) 100%);
}

.main-nav {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999;
}

.nav-list {
  display: flex;
  justify-content: flex-end;

  &__item {
    display: flex;
    align-items: center;
    margin-right: rem(25px);
    font-size: .8em;
    text-transform: uppercase;
    letter-spacing: .16em;

    &__link {
      position: relative;
      padding: rem(50px) rem(2px) rem(30px) rem(2px);

      &::after {
        position: absolute;
        top: .7em;
        bottom: 0;
        left: -.7em;
        width: 0;
        height: 1em;
        margin: rem(50px) rem(2px) rem(30px) rem(2px);
        content: '';
        background: rgba(theme-color(primary), .2);
        transition: width .5s;
        will-change: width;
      }
    }

    &:last-child {
      margin-right: 0;

      .nav-list__item__link {
        padding-right: 0;
      }
    }
  }
}

.nuxt-link-active::after {
  width: 112%;
}
</style>
