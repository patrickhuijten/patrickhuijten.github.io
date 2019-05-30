import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        title: "patrickhuijten.github.io",
        strapline: "hello world",
        pages: [
            {
                index: 0,
                title: "home",
                name: 'home',
                content: "",
                url: '/home'
            },
            {
                index: 0,
                title: "projects",
                name: 'projects',
                content: "",
                url: '/projects'
            },
            {
                index: 0,
                title: "about",
                name: 'about',
                content: "",
                url: '/about'
            }
        ],
        projects: [
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            },
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            },
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            },
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            },
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            },
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            },
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            },
            {
                name: "Hello",
                description: "World",
                icon: "fa fas-draw-polygon"
            }
        ]
    },
    mutations: {

    },
    getters: {
        GetTitle(state) {
            return state.title;
        },
        GetStrapline(state) {
            return state.strapline;
        },
        GetPages(state) {
            return state.pages;
        },
        GetProjects(state) {
            return state.projects;
        }
    }
}); 