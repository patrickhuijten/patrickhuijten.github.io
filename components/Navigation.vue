<template>
  <div class="grid grid-auto-column justify-content-center grid-gap-2">
    <nuxt-link
      v-for="(route, index) in routes"
      :key="index"
      class="text-dark h2"
      :to="route.path"
    >{{route.name}}</nuxt-link>
  </div>
</template>
<script>
export default {
  computed: {
    routes() {
      return this.$store.getters.GetRoutes;
    }
  }
}
</script>