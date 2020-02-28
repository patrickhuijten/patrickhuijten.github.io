<template>
  <div class="page">
    <div class="container">
      <div class="grid">
        <img class="photo shadow rounded" :src="image" />
        <div class="title border-bottom">
          <h2 v-text="name" />
          <span class="text-secondary" v-text="subtitle" />
          <div class="social">
            <a
              v-for="profile in social"
              :key="profile._uid"
              :href="profile.url.url"
              target="_blank"
              class="social-item"
            >
              <font-awesome-icon :icon="['fab', profile.icon]" />
            </a>
          </div>
        </div>
        <div class="bio">
          <div class="paragraph" v-html="richtext" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueFooter from "~/components/VueFooter.vue";
import VueNavigation from "~/components/Navigation.vue";

export default {
  head() {
    return {
      titleTemplate: "%s | " + this.currentRoute.name
    };
  },
  computed: {
    currentRoute() {
      return this.$store.getters.GetCurrentRoute;
    },
    richtext() {
      return this.$storyapi.richTextResolver.render(this.paragraph);
    }
  },
  components: {
    VueNavigation,
    VueFooter
  },
  async asyncData(context) {
    // Load the JSON from the API
    try {
      const { data } = await context.app.$storyapi.get("cdn/stories/index", {
        version: "draft"
      });
      return data.story.content;
    } catch (e) {
      throw e;
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-areas:
    "photo title"
    "photo bio";
  grid-template-columns: 240px 1fr;
  grid-gap: 1.5rem;

  @include mobile-only() {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "photo"
      "bio";
  }
}

.photo {
  grid-area: photo;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center 20%;

  @include mobile-only() {
    height: 360px;
  }
}
.title {
  grid-area: title;

  .social {
    display: grid;
    grid-auto-flow: column;
    grid-auto-rows: 50px;
    grid-auto-columns: 50px;

    .social-item {
      svg {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transform: scale(0.5);
      }
    }
  }
}
.bio {
  grid-area: bio;
}
</style>