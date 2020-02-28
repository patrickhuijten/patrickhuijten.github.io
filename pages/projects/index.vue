<template>
  <div class="grid">
    <Project
      v-for="project in projects"
      :key="project._uid"
      :project="project.content"
      :url="project.url"
    />
  </div>
</template>
<script>
import Project from "~/components/Project.vue";
export default {
  components: {
    Project
  },
  async asyncData(context) {
    // Load the JSON from the API
    try {
      const { data } = await context.app.$storyapi.get("cdn/stories", {
        version: "draft",
        starts_with: "projects"
      });
      return {
        projects: data.stories.map(project => {
          return {
            content: project.content,
            url: project.full_slug
          };
        })
      };
    } catch (e) {}
  }
};
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: 240px;
  grid-gap: 1.5rem;
}

.container {
  min-height: 100vh;
  display: grid;
  align-content: center;
  padding: 1.5rem;
  @include mobile-only() {
    align-content: flex-start;
    height: calc(100vh - 200px);
    overflow: auto;
  }
}
</style>