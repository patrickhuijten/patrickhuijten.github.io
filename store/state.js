export default () => ({
  counter: 0,
  projects: [],
  routeIndex:0,
  routes: [
    {
      index:0,
      name: 'About',
      path: '/'
    },
    {
      index:1,
      name: 'Projects',
      path: '/projects'
    }
  ],
  socialProfiles: [
    {
      name: 'linkedin',
      icon:'linkedin-in',
      url: 'https://www.linkedin.com/in/patrick-huijten/'
    },
    {
      name: 'github',
      icon:'github',
      url: 'https://github.com/patrickhuijten'
    }
  ]
})