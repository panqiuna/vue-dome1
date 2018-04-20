import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../containers/Home.vue';
import List from '../containers/List.vue';
import Add from '../containers/Add.vue';
import Personal from '../containers/Personal.vue'
Vue.use(VueRouter);//使用路由
//路由表
const routes=[
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
  {path:'/personal',component:Personal},
  ];
//导出路由
export default new VueRouter({
  routes
})
