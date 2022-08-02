const routes = [
  {
    path: '/',
    redirect: '/access',
  },
  {
    name: 'Access',
    path: '/access',
    component: './Access',
  },
  {
    name: 'Settings',
    path: '/home',
    component: './Home',
  },
  {
    // Mount app1
    name: 'app1',
    path: '/app1',
    microApp: 'app1',
  },
];

export default routes;
