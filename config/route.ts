const routes = [
  {
    path: '/',
    redirect: '/access',
  },
  {
    name: 'settings',
    path: '/access',
    component: './Access',
  },
  {
    name: 'settings',
    path: '/home',
    component: './Home',
  },
];

export default routes;
