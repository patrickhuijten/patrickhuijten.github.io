<template>
  <div class="grid grid-auto-column justify-content-center grid-gap-2 p-3" v-if="projects">
    <nuxt-link
      class="thumbnail btn bg-transparent card p-0 shadow"
      v-for="(project, index) in projects"
      :key="index"
      :to="'/projects/' + project._uid"
    >
    <img class="card-img" :src="project.media[0].data[0].data" />
      <div class="card-img-overlay text-light"> 
        <h4>{{project.name}}</h4>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      default: null
    }
  }
};
</script>

<style scoped>
.thumbnail{
  width: 200px;
  height: 200px;
  overflow: hidden;
}
  .card-img{
    object-fit:cover;
    width: 100%;
    height: 100%;
  }
  
</style>
