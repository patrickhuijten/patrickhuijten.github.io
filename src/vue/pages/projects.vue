<template>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div class="card" v-for="(project, index) in projects" v-bind:key="index">
        <div class="card-title"><h2>{{project.name}}</h2></div>
        <div class="card-body">{{project.description}}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card
{
    width:calc(25% - 10px);
    height: 200px;
    margin-bottom: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      title: "home"
    };
  },
  computed: {
    projects() {
      return this.$store.getters.GetProjects;
    }
  }
};
</script>
