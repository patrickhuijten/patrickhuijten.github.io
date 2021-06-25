<template>
  <div class="page">
    <div class="container">
      <div class="grid">
        <img
          class="photo shadow rounded"
          :src="image"
          :alt="name"
          width="1024px"
          height="1024px"
          loading="lazy"
        />
        <div class="title">
          <h2 v-text="name" />
          <span class="text-secondary" v-text="subtitle" />
          <div class="social">
            <a
              v-for="profile in social"
              :key="profile._uid"
              :href="profile.url.url"
              target="_blank"
              class="social-item"
              :aria-label="profile.alt"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', profile.icon]" />
            </a>
          </div>
        </div>
        <div class="bio">
          <div class="paragraph" v-rich-text="paragraph" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueFooter from "~/components/VueFooter.vue";
import VueNavigation from "~/components/Navigation.vue";

export default {
  props: ["image", "name", "subtitle", "social", "paragraph"],
  computed: {
    currentRoute() {
      return this.$store.getters.GetCurrentRoute;
    },
  },
  components: {
    VueNavigation,
    VueFooter,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-areas:
    "photo title"
    "photo bio";

  @include mobile-only() {
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
  border-bottom: 1px solid var(--border);

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
        color: var(--highlight) !important;
      }
    }
  }
}
.bio {
  grid-area: bio;
}
</style>