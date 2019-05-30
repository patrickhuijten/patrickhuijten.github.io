//import dependencies
import Vue from 'vue';

//import pages

import VuePageHome from "./vue/pages/home.vue";
import VuePageProjects from "./vue/pages/projects.vue";
import VuePageAbout from "./vue/pages/about.vue";

//export pages
let Home = Vue.component('page-home', VuePageHome);
let Projects = Vue.component('page-projects', VuePageProjects);
let About = Vue.component('page-about', VuePageAbout);

export let Pages = {
    Home,
    Projects,
    About
}
