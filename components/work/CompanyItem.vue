<template>
  <div class="company">
    <div class="title">
      <span class="role">
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
        const startDate = new Date(this.company.start_date);
        const endDate = new Date(this.company.end_date);

        const start = new moment(startDate).format("MMM YYYY");
        const end = new moment(endDate).format("MMM YYYY");
        const current = this.company.current;

        return `${start} - ${current ? "Present" : end}`;
      } else {
        return '...'
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
  }
  > .period {
    grid-area: period;
    text-align: right;
  }
}
</style>