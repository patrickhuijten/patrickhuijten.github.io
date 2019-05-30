import VueRouter from 'vue-router';
import { Pages } from './modules';
console.log(Pages.Home);
export const routes = [
    {
        path: '/',
        name: 'pages',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Pages.Home

    },
    {
        path: '/projects',
        name: 'projects',
        component: Pages.Projects
    },
    {
        path: '/about',
        name: 'about',
        component: Pages.About
    },
    {
        path: "/404",
        redirect: '/home'
    }
];

export const router = new VueRouter({
    routes: routes,
   // mode:"history"
});