const mutations = {
    SetProjects(state, data) {
        state.projects = data;
    },
    AddProject(state, data) {
        state.projects.push(data);
    },
    SetRouteIndex(state, index) {
        state.routeIndex = index;
    }
}

export default mutations