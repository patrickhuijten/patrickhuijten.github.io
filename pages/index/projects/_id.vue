<template>
  <div class="content-container">
    <div class="border-bottom">
      <img class="img-fluid rounded shadow" style="background-color:#ddd" v-if="media.length > 0" :src="media[0].data">
      <div class="col p-3">
        <h2 v-if="project">{{project.name}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5>Project summary</h5>
        <p v-if="project">{{project.description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5>Objectives</h5>
        <ul>
          <li v-for="(objective, index) in objectives" :key="index">
            <span>
              {{objective.value}}
            </span>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5>Challenges</h5>
        <p v-if="challenges">{{challenges}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5>Technologies used</h5>
        <ul>
          <li v-for="(technology, index) in technologies" :key="index">
            <span>
              {{technology.value}}
              <i>{{i}}</i>
            </span>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5>What I've learned</h5>
        <p v-if="learned">{{learned}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    project() {
      return this.$store.getters.GetProjects.filter(item => {
        return item._uid === this.id;
      })[0];
    },
    media() {
      return this.project ? this.project.media[0].data : [];
    },
    objectives() {
      return this.project ? this.project.objectives : [];
    },
    challenges() {
      return this.project ? this.project.challenges : null;
    },
    technologies() {
      return this.project ? this.project.technologies : [];
    },
    challenges() {
      return this.project ? this.project.learned : null;
    }
  }
};
</script>
<style scoped>
.row {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  margin-right: 0;
  margin-left: 0;
}
.content-container {
  grid-auto-flow: row;
}
</style>