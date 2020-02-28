require('dotenv').config();
import pkg from './package';
import axios from 'axios';

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: "Patrick Huijten",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: ['~assets/transitions.css', '~assets/grid.css'],
    styleResources: {
        scss: [
            '~/assets/main.scss'
        ]
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: '~plugins/aos.js', mode: 'client' }],

    /*
     ** Nuxt.js modules
     */

    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',

        //font awesome
        [
            'nuxt-fontawesome', {
                imports: [{
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['faExternalLinkAlt', 'faChevronLeft']
                },
                {
                    set: '@fortawesome/free-brands-svg-icons',
                    icons: ['faGithub', 'faLinkedin', 'faFacebook', 'faInstagram', 'faArtstation']
                }
                ]
            }
        ],
        //storyblok
        [
            'storyblok-nuxt',
            {
                accessToken: process.env.STORYBLOK_TOKEN,
                cacheProvider: 'memory'
            }
        ],
        '@nuxtjs/style-resources'
    ],

    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { }
    },
    generate: {
        exclude: [
           /^(?=.*\projects\b).*$/
       ]
    }
}