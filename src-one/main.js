
import Vue from 'vue';
import router from './router';
import App from './App.vue';
import './common/index.less';
new Vue({
  el:'#app',
  router,
  //渲染页面
  render:h=>h(App)//传入组件
});
