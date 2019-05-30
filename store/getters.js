const getters = {
    GetProjects(state) {
      return state.projects;
    },
    GetRoutes(state) {
      return state.routes;
    },
    GetCurrentRoute(state) {
      return state.routes[state.routeIndex];
    },
    GetSocialMediaProfiles(state) {
      return state.socialProfiles;
    }
  }

  export default getters