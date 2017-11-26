import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import fastclick from 'fastclick';
import router from './router';
//导入stylus文件
import 'common/stylus/index.styl';

Vue.config.productionTip = false;

fastclick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
