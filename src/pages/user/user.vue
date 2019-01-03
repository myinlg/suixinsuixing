<template>
  <transition name="fade">
    <router-view class="user"/>
  </transition>
</template>
<script>
	export default {
	}
</script>
<style lang="less" scoped>
.user {
  transform: translate3d(0, 0, 0);

  &.fade-enter-to,
  &.fade-leave-to {
    transition: all 0.8s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
}
// .user-bg {
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url('./img/login_bg.jpg');
//   background-size: cover;
//   background-position: center center;
// }
</style>

