<template>
  <section class="container-fluid">
    <div class="container overflow-hidden">
      <nuxt-child/>
    </div>
    <vue-navigation/>

    <vue-footer/>
  </section>
</template>
<script>
import VueFooter from "~/components/VueFooter.vue";
import VueNavigation from "~/components/Navigation.vue";

export default {
    head() {
    return {
            titleTemplate:'%s | ' + this.currentRoute.name    }
  },
  computed:{
    currentRoute(){
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
body,
section {
  width: 100%;
  min-height: 100vh;
}

section {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 1fr;
}
.container{
  display:grid;
  justify-content: center;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-auto-rows: min-content;
place-content: center;
padding: 0;
}
.content-container {
  width: 800px;
  padding:1rem 0;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-gap: 0.5rem;
}

body {
  background-color: #eee;
  overflow-y: scroll;
  overflow-x: hidden;
}

.container-fluid{
  padding:0;
  padding-bottom: 1rem;
}

@media screen and (max-aspect-ratio:1/1) {
.content-container{
  grid-auto-flow: row !important;
  grid-auto-rows:min-content;
}
}
</style>
