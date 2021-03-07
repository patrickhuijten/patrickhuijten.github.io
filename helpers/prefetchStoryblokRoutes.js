import axios from "axios"
const prefetchStoryBlokRoutes = async() => {
    axios.defaults.baseURL = process.env.STORYBLOK_BASEURL
    axios.defaults.params = {
        token: process.env.STORYBLOK_TOKEN
    }
    const {
        data
    } = await axios.get('cdn/links', {
        params: {
            token: process.env.STORYBLOK_TOKEN
        }
    })
    const links = Object.values(data.links)
        // console.log(links);

    const requests = links.map(link => {
        return axios.get(`cdn/stories`, {
            params: {
                ...axios.defaults.params,
                starts_with: link.full_slug
            }
        })
    })

    const results = await Promise.all(requests)
    const routes = results.map(result => {
        return {
            route: result.data.stories[0].path,
            payload: result.data.stories[0].content,
        }
    })
    return routes
}

export default prefetchStoryBlokRoutes