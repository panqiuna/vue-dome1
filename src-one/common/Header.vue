<template>
    <div class="header">
        {{title}}
    </div>
</template>
<script>
    export default {
        //校验类型用对象
        props:{
            title:{}
        },
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped lang="less">
  .header{
    background: #f1f1f1;
    text-align: center;
    height: 50px;
    line-height: 50px;
position: fixed;
    width: 100%;
  }
</style>

