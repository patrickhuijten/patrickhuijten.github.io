<template>
  <div class="company">
    <div class="title">
      <span class="role h5">
        {{ company.role }} @
        <a
          class="name h5"
          :href="company.url.url || null"
          v-text="company.name"
          target="_blank"
          rel="noopener"
        />
      </span>

      <span class="location text-secondary" v-text="company.location" />
      <span class="period text-secondary" v-text="period" />
    </div>
    <ul class="activities">
      <li
        class="responsibility"
        v-for="item in company.responsibilities"
        :key="item._uid"
        v-rich-text="item.text"
      />
    </ul>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    company: {
      type: Object,
      immediate: true,
    },
  },
  computed: {
    function() {
      return `${this.company.role} @`;
    },
    period() {
      if (this.company) {
        const startDate = this.company.start_date
          ? new moment(this.company.start_date).format("MMM YYYY")
          : "...";

        const endDate = this.company.end_date
          ? new moment(this.company.end_date).format("MMM YYYY")
          : "...";
        const current = this.company.current;

        return `${startDate} - ${current ? "Present" : endDate}`
      } else {
        return "... - ...";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.company {
  width: 100%;
}
.title {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: var(--border) solid 1px;
  display: grid;
  grid-template-areas:
    "role role"
    "location period";

  > .role {
    grid-area: role;
  }
  > .location {
    grid-area: location;
    text-align: left;
    &::before {
      content: "📍";
    }
  }
  > .period {
    grid-area: period;
    text-align: right;
    &::before {
      content: "🗓 ";
    }
  }
}
</style>