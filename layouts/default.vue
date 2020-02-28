<template>
  <div class="main container-fluid">
    <nuxt />
    <VueNavigation />
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
  max-width: 960px;
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
.page {
  width: 100%;

  @include mobile-only() {
    align-content: flex-start;
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
