<template>
  <div class="project-container" v-if="projects">
    <nuxt-link
      class="thumbnail btn bg-transparent card p-0 shadow"
      data-aos="fade-in"
      v-for="(project, index) in projects"
      :key="index"
      :to="'/projects/' + project._uid"
    >
    <img class="card-img" :src="project.media[0].data[0].data" />
      <div class="card-img-overlay grid grid-auto-row align-content-center text-dark"> 
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
.project-container{
  display:grid;
  grid-template-columns: repeat(auto-fill,minmax(240px, 1fr));
  justify-items: center;

  grid-gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
}
.thumbnail{
  width: 100%;
  height: 240px;
  overflow: hidden;
}
.thumbnail:hover .card-img{
 opacity:0.2;
}
.thumbnail:hover .card-img-overlay{
 opacity:1;
}
  .card-img{
    object-fit:cover;
    width: 100%;
    height: 100%;
    opacity:1;
    transition: 200ms ease;
  }

  .card-img-overlay{
    transition:200ms ease;
    opacity:0.0;
  }
  
  
</style>
