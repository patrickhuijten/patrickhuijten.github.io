const StoryblokClient = require('storyblok-js-client');
const fs = require('fs');
const Storyblok = new StoryblokClient({
    accessToken: 'g5CFQMSQrmW89Cv5MyahyQtt',
    cache: {
        clear: 'auto',
        type: 'memory'
    }
})

Storyblok
    .get('cdn/stories', {
        version: 'published',
        starts_with: 'projects/'
    })
    .then(response => {
        //  console.log(response.data.stories[0].content.data);
        let routes = Object.values(response.data.stories[0].content.data.map(item => { return `/projects/${item._uid}` }));
        fs.writeFileSync('routes.json', JSON.stringify(routes));
        //     context.commit('SetProjects', response.data.stories[0].content.data)
    })
    .catch(error => {
        console.error(error)
    })