<template>
  <div class="navigation grid grid-auto-column fr-1 grid-gap-2 justify-content-center">
    <nuxt-link
      v-for="(route, index) in routes"
      :key="index"
      @click.native="SetRouteIndex(route.index)"
      class="text-dark text-center h1 m-0"
      :to="route.path"
    >{{route.name}}</nuxt-link>
  </div>
</template>
<script>
import pkg from "~/package";

export default {
  computed: {
    routes() {
      return this.$store.getters.GetRoutes;
    }
  },
  methods: {
    SetRouteIndex(index) {
      this.$store.commit("SetRouteIndex", index);
    }
  }
};
</script>
<style scoped>
.navigation {
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-aspect-ratio: 1/1) {
 
}
</style>