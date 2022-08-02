export default {
  qiankun: {
    slave: {},
  },
  antd: {},
  model: {},
  headScripts: [`window.publicPath = '//localhost:8001/';`],
  routes: [
    { path: '/', component: 'index' },
    { path: '/app1', component: 'app1' },
  ],
  runtimePublicPath: {},
};
