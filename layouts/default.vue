<template>
  <div class="main container-fluid">
    <nuxt />

    <!--<VueNavigation />-->
    <VueFooter />
  </div>
</template>
<script>
import VueFooter from "@/components/VueFooter.vue";
import VueNavigation from "@/components/Navigation.vue";

export default {
  components: {
    VueNavigation,
    VueFooter
  }
};
</script>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  padding: 0;
  background-color: var(--background);
}

.main {
  min-height: 100vh;
  @include mobile-only() {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr max-content max-content;
    padding: 1rem;
  }
}
.container {
  padding-right: 0;
  padding-left: 0;
  display: grid;
  align-content: center;

  @include desktop-only() {
    min-height: 100vh;
  }

  @include mobile-only() {
    align-content: flex-start;
  }
}
.grid {
  grid-template-columns: 240px 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;

  @include mobile-only() {
    grid-template-columns: 1fr;
  }
}
.page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-content: center;

  @include mobile-only() {
    align-content: flex-start;
    padding: 1rem 0;
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
