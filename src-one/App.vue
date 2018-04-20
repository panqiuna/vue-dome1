<template>
    <div>
    导航
      <!--跳转路由-->
      <router-view></router-view>
      <!--使用-->
      <MNav></MNav>
    </div>
</template>
<script>

  /*
  * 1、第一步引入组件
  * 2、注册组件
  * 3、使用组件
  * */
  //引入组件
  import MNav from './components/Nav.vue';
    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {},
//      注册
      components:{MNav},
        computed: {},
        mounted(){
        }
    }
</script>

