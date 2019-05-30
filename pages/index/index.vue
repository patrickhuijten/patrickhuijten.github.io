<template>
  <div class="content-container">
    <div class="about-image">
      <img class="img-fluid rounded" width="200px" height="200px" src="/images/profile.jpg">
      <hr />
          <div class="social">
        <div v-for="(item, index) in socialProfiles" :key="index" class="social-item">
          <a :href="item.url" target="_blank" class="text-dark">
    <font-awesome-icon :icon="['fab', item.icon]" />
          </a>
        </div>
      </div>
    </div>
    <div class="about-text">
      <h2>Patrick Huijten</h2>
      <span class="text-secondary">Full-stack Developer @ Amsterdam, NL</span>
      <hr>
      <p> I'm a passionate Full-Stack Developer based in Amsterdam/Hilversum area. I love working with new technologies and people that are passionate about their work.</p>

      <p>I have experience with tools like Nuxt/Vue.js, Node.js, Unity3D, Mapbox.js, GIS, Express.js.</p>
  
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    socialProfiles() {
      return this.$store.getters.getSocialProfiles;
    }
  }
};
</script>
<style scoped>
.content-container {
  grid-auto-flow: unset;
  justify-content: center;
  grid-template-columns: 200px 600px;
  grid-gap: 1rem;
}

.social {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  grid-auto-columns: 32px;
  grid-template-rows: 32px;
}

a > svg{
  width: 100% !important;
  height: unset;
}
</style>