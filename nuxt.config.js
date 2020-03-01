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
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },

    /*
     ** Global CSS
     */
    styleResources: {
        scss: [
            '~/assets/main.scss'
        ]
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{
        src: '~plugins/aos.js',
        mode: 'client'
    }],

    /*
     ** Nuxt.js modules
     */

    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/sitemap',
        // Doc: https://bootstrap-vue.js.org/docs/

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
        ['@netsells/nuxt-hotjar', {
            id: process.env.HOTJAR_ID,
            sv: process.env.HOTJAR_SV,
        }],
        '@nuxtjs/style-resources',
        'nuxt-purgecss'
    ],
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: process.env.GOOGLE_ANALYTICS_ID
        }]
    ],
    sitemap: {
        hostname: process.env.HOSTNAME,
        exclude: [
            '/projects'
        ],
    },
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
        extractCSS: true,
        fallback: true,
        extend(config, ctx) {}
    },
    generate: {
        fallback: true,
        exclude: [
            /^(?=.*\projects\b).*$/
        ]
    }
}