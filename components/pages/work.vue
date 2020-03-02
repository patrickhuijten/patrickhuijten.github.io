<template>
  <div class="page">
    <div class="container">
      <div class="grid">
        <div class="title">
          <h2 v-text="title" />
          <span class="text-secondary" />
        </div>
        <div class="index btn-group-vertical">
          <button
            class="company"
            :class="{'active': key === index}"
            v-for="(company, key) in companies"
            :key="company._uid"
            v-text="company.name"
            @click="setIndex(key)"
          />
        </div>
        <div
          class="block"
          v-if="currentCompany"
          :key="currentCompany._uid"
          data-aos="fade"
          data-aos-duration="500"
        >
          <div class="title">
            <div class="role h5" v-text="currentCompany.role + ' @ '" />
            <a
              class="name h5"
              :href="currentCompany.url.url || null"
              v-text="currentCompany.name"
              target="_blank"
            />
            <small class="location text-secondary" v-text="currentCompany.location" />
            <span class="period text-secondary" v-text="period" />
          </div>
          <ul class="responsibilities">
            <li
              class="responsibility"
              v-for="item in currentCompany.responsibilities"
              :key="item._uid"
              v-rich-text="item.text"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    title: {
      type: String,
      default: null,
      immediate: true
    },
    companies: {
      type: Array,
      default: [],
      immediate: true
    }
  },
  data() {
    return {
      index: 0
    };
  },
  computed: {
    currentCompany() {
      let currentCompany = this.companies[this.index]
        ? this.companies[this.index]
        : null;

      return currentCompany;
    },
    period() {
      const start = new moment(new Date(this.currentCompany.start_date)).format(
        "MMM YYYY"
      );
      const end = new moment(new Date(this.currentCompany.end_date)).format(
        "MMM YYYY"
      );
      const current = this.currentCompany.current;

      return `${start} - ${current ? "Present" : end}`;
    }
  },
  methods: {
    setIndex(index) {
      const instance = this;
      this.$nextTick(() => {
        instance.index = index;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-areas:
    "title title"
    "index block";
  grid-template-rows: 50px 500px;
  @include mobile-only() {
    grid-template-areas:
      "title"
      "index"
      "block";
    grid-template-rows: 50px 50px max-content !important;
    grid-row-gap: 0;
  }

  > .title {
    grid-area: title;
  }

  > .index {
    grid-area: index;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;

    @include mobile-only() {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      overflow-x: auto;
    }

    > .company {
      color: var(--text);
      background: none;
      text-align: left;
      transition: transform 250ms, color 250ms;
      border-color: var(--border);
      border-style: solid;
      border-width: 0 0 0 2px;
      padding-left: 2rem;
      @include mobile-only() {
        border-width: 0 0 2px 0;
        padding: 0 2rem;
      }
      &.active {
        color: var(--highlight);
        border-color: var(--hightlight) !important;
        font-weight: bold;
      }
    }
  }

  .block {
    grid-area: block;
    @include mobile-only () {
      padding-top: 2rem;
    }
    > .title {
      display: grid;
      grid-auto-rows: 50px;
      grid-template-columns: max-content max-content 1fr;
      grid-template-areas:
        "role name location"
        "period . .";
      .role {
        display: inline;
        grid-area: role;
      }

      .name {
        display: inline;
        grid-area: name;
      }
      .location {
        grid-area: location;
        text-align: right;
      }
      .period {
        grid-area: period;
      }

      .responsibilities {
        margin-top: 1rem;
      }

      @include mobile-only() {
        grid-template-areas:
          "role name"
          "period location";

          grid-template-columns: max-content 1fr;
          grid-column-gap: 0.5rem;
      }
    }
  }
}
</style>