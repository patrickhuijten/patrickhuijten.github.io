const actions = {
  LoadProjects(context) {
    console.log(this) 
    return this.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'projects/'
      })
      .then(response => {
        context.commit('SetProjects', response.data.stories[0].content.data)
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  },
}

export default actions