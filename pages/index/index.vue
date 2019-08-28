<template>
  <div class="grid grid-auto-column reactive justify-content-center align-content-center grid-gap-2" >
      <img class="img-fluid rounded shadow profile" src="images/profile.jpg" >
      <div>
      <h2>Patrick Huijten</h2>
      <span class="text-secondary">Full-stack Developer @ Amsterdam, NL</span>
      <hr>
      <p> I'm a passionate Full-Stack Developer based in Amsterdam/Hilversum area. I love working with new technologies and people that are passionate about their work.</p>
      <p>I have experience with tools like Nuxt/Vue.js, Node.js, Unity3D, Mapbox.js, GIS, Express.js.</p>
    </div>
    </div>
</template>
<style scoped>
.profile{
  max-width:200px;
}
@media screen and (max-aspect-ratio:1/1){
  .profile{
    max-width: 100%;
  }
}
</style>