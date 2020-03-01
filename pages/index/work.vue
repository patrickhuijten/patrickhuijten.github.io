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
            @click="index = key"
          />
        </div>
        <div
          class="block"
          v-if="currentCompany"
          :key="currentCompany._uid"
          data-aos="fade"
          data-aos-duration="500"
        >
          <h5 class="title">
            <div class="role" v-text="currentCompany.role + ' @ '" />
            <a
              class="name"
              :href="currentCompany.url.url || null"
              v-text="currentCompany.name"
              target="_blank"
            />
            <small class="location text-secondary" v-text="currentCompany.location" />
          </h5>
          <span class="period text-secondary" v-text="period" />
          <ul class="responsibilities">
            <li
              class="responsibility"
              v-for="item in responsibilities"
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
  props: ["title", "companies"],
  data() {
    return {
      index: 0
    };
  },
  computed: {
    currentCompany() {
      return this.companies[this.index] ?? null;
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
    },
    responsibilities() {
      return this.currentCompany.responsibilities || [];
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
  }

  > .title {
    grid-area: title;
  }

  .index {
    grid-area: index;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;

    @include mobile-only() {
      overflow-x: auto;
      grid-auto-columns: 150px;
      grid-template-columns: unset;
      grid-auto-flow: column;
    }

    .company {
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
      }
      &.active {
        color: var(--highlight);
        border-color: var(--hightlight);
        font-weight: bold;
      }
      &:hover {
        &:not(.active) {
        }
      }
    }
  }
  .block {
    grid-area: block;

    .title {
      .role {
        display: inline;
      }

      .name {
        display: inline;
      }
      .location {
        float: right;
      }
    }
    .responsibilities {
      margin-top: 1rem;
    }
  }
}
</style>