import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'
import {store} from './store'
import {router} from './routing'
import VueRouter from 'vue-router'


Vue.use(vuex);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})
