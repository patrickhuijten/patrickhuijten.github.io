<template>
  <div class="container-fluid p-0">
    <div class="container grid grid-auto-row page py-3 align-items-end">
      <nuxt-child/>
      <div>
      <vue-navigation/>
      <vue-footer/>
      </div>
    </div>
  </div>
</template>
<script>
import VueFooter from "~/components/VueFooter.vue";
import VueNavigation from "~/components/Navigation.vue";

export default {
  head() {
    return {
      titleTemplate: "%s | " + this.currentRoute.name
    };
  },
  computed: {
    currentRoute() {
      return this.$store.getters.GetCurrentRoute;
    }
  },
  components: {
    VueNavigation,
    VueFooter
  }
};
</script>

<style>
html,
body {
  width: 100%;
  min-height: 100vh;
  padding: 0.25rem;
  margin: 0;
}

.page{
  min-height: 100vh;
}

.container{
  max-width: 960px;
}

.grid-container{
  display:grid;
  grid-template-columns: repeat(auto-fill,minmax(240px, 1fr));
  justify-items: center;

  grid-gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
