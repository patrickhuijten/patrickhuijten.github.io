<template>
  <div v-if="pages.length > 0">
    <component data-aos="fade-right" data-aos-duration="1000" v-for="page in pages" :is="page.name" :key="page.uuid" v-bind="page.content" />
  </div>
</template>
<script>
import Work from './index/work'
import About from './index/about'
export default {
  components: {
    About, 
    Work
  },
  meta() {
    return {
      description: 'hello world'
    }
  },
  async asyncData(context) {
    const { data } = await context.app.$storyapi.get("cdn/stories", {
      version: "draft"
    });
    return {
      pages: data.stories
      .filter(page => page.parent_id === 0)
      .sort((a, b) => a.content.index - b.content.index)
    };
  }
};
</script>