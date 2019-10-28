<template>
  <ul class="list-unstyled spec-list">
    <li>
      <strong>
        {{ specs.locatie }}
      </strong>
      <p>
        {{ specs.Client }}
      </p>
    </li>
    <li v-if="specs.disciplines">
      <strong>
        Verantwoordelijkheden
      </strong>
      <p>
        {{ specs.disciplines }}
      </p>
    </li>
    <li v-if="specs.skills">
      <strong>
        Skills & tools
      </strong>
      <p>
        {{ specs.skills }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    specs: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(1.5em);
  }
}

.spec-list {
  display: flex;

  @include media-breakpoint-down(md) {
    flex-wrap: wrap;
  }

  li {
    display: flex;
    flex-flow: column;
    padding: 20px;
    animation: fade-up .75s .3s ease both;

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: .3s + ($i * .1s);
      }
    }

    &:first-child {
      padding-left: 0;
    }

    @include media-breakpoint-down(md) {
      width: 100%;
      padding: 0 0 0;
    }

    strong {
      margin-bottom: 2px;
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2.3px;
    }

    p {
      opacity: .8;
    }
  }
}
</style>
