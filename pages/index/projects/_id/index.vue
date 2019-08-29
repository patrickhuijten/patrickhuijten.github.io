<template>
  <div class="grid grid-auto-row grid-gap-2 border-bottom mb-3">
    <div class="border-bottom">
      <b-button variant="link" class="text-secondary" style="opacity:0.6" :to="'/projects'">
        <font-awesome-icon icon="chevron-left" class="mr-2" />back to projects
      </b-button>
      <hr />
      <carousel :perPage="1" :autoplay="true">
        <slide v-for="(item, index) in media" :key="index">
          <img class="img-fluid rounded" style="background-color:#ddd" :src="item.data" />
        </slide>
      </carousel>

      <div class="col">
        <h2 v-if="project">
          {{project.name}}
          <b-button-group>
          <b-button
            :disabled="!project.link"
            :href="project.link"
            :target="'_blank'"
            variant="link"
            v-b-tooltip.hover
            title="Go to live project"
          >
            <font-awesome-icon icon="external-link-alt" />
          </b-button>
            <b-button
            :disabled="!project.source"
            :href="project.source"
            :target="'_blank'"
            variant="link"
            v-b-tooltip.hover
            title="Go to source repository"
          >
            <font-awesome-icon :icon="['fab','github']" />
          </b-button>
          </b-button-group>
        </h2>
      </div>
    </div>
    <div class="grid grid-auto-column reactive fr-1 grid-gap-2" >
      <div class="col">
        <h5>Project summary</h5>
        <hr />
        <p v-if="project" v-html="project.description" />
      </div>
    </div>
    <div class="grid grid-auto-column reactive fr-1 grid-gap-2">
      <div class="col" v-if="objectives.length > 0">
        <h5>Objectives</h5>
        <hr />

        <ul>
          <li v-for="(objective, index) in objectives" :key="index">
            <span>{{objective.value}}</span>
          </li>
        </ul>
      </div>
      <div class="col" v-if="challenges" >
        <h5>Challenges</h5>
        <hr />
        <p>{{challenges}}</p>
      </div>
    </div>
    <div class="grid grid-auto-column reactive fr-1 grid-gap-2">
      <div class="col">
        <h5>Technologies used</h5>
        <hr />

        <ul>
          <li v-for="(technology, index) in technologies" :key="index">
            <span>{{technology.value}}</span>
          </li>
        </ul>
      </div>
      <div class="col" v-if="learned">
        <h5>What I've learned</h5>
        <hr />

        <p>{{learned}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  },
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
    learned() {
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
.col {
  margin: 0;
  padding: 0;
}
</style>