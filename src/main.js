// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router.js';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import './common/scss/index.scss';
import './common/fonts/font/iconfont.css';
// import './common/scss/icon.css';
Vue.use(VueRouter);
Vue.use(VueResource);

// 导入 自定义路由模块

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
