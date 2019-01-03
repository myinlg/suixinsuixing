<template>
  <div id="app" :class="{'app-style':$route.name=='user_login'}">
    <router-view class="li_list"/>
  </div>
</template>
<script>
export default {
  name:'',
  data(){
    return {}
  },
}
</script>
<style lang="less" scoped>
.app-style {
  background-image: url('./pages/user/img/login_bg.jpg');
  background-size: cover;
  background-position: center center;
}
</style>
