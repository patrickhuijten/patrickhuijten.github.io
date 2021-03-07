<template>
  <nav>
    <nuxt-link
      v-for="(route, index) in routes"
      :key="index"
      class="nav-link h2"
      :to="route.path"
    >{{route.name}}</nuxt-link>
  </nav>
</template>
<script>
export default {
  computed: {
    routes() {
      return this.$store.getters.GetRoutes;
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  padding-top: 2rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
    margin: 0 auto;

  @include desktop-only() {
    position: fixed;
    bottom: 2.5rem;
    left: 0;
    right: 0;
  }

  .nav-link {
    opacity: 0.2;
    transition: opacity 250ms ease;
    color: var(--dark);
    &.nuxt-link-exact-active {
      opacity: 1;
    }
  }
}
</style>