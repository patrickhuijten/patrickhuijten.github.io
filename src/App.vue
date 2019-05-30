<template>
  <div id="app" class="w-100 h-100 bg-light">
    <div class="container d-flex h-100 p-3 mx-auto flex-column">
  


      <main role="main" class="inner cover text-dark p-0">
        <router-view />

      </main>

      <footer class="mastfoot mt-auto text-dark">
        <div class="inner">
          <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
      title()
    {
      return this.$store.getters.GetTitle;
    },
       strapline()
    {
      return this.$store.getters.GetStrapline;
    },
    pages()
    {
      return this.$store.getters.GetPages;
    }
  }
}
</script>