<template>
  <ul class="list-unstyled spec-list">
    <li>
      <strong>
        Company
      </strong>
      <p>
        Nerds & Company
      </p>
    </li>
    <li>
      <strong>
        Work
      </strong>
      <p>
        Frontend development
      </p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(1.5em);
  }
}

.spec-list {
  display: flex;

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

    strong {
      margin-bottom: 2px;
      font-weight: 900;
      letter-spacing: 1.6px;
    }

    p {
      opacity: .8;
    }
  }
}
</style>
