<template>
  <div class="header">
    <div class="header-content" :class="[showHead ? 'slide-down':'slide-up']">
      <div class="content content-wrapper">
        <div class="logo">
          <img src="./img/logo.jpg" alt="">
          <div class="title">随心随性</div>
        </div>
        <div class="search">
          <input v-model="value" placeholder="请输入..."/>
          <div class="button">
            <img src="./img/search.png" alt="">
          </div>
        </div>
        <div class="login">
          <div :class="{'font-color':userHover}" @mouseover="userHover=true" @mouseout="userHover=false">
            <img v-if="!userHover" src="./img/user1.png" alt="">
            <img v-else src="./img/user2.png" alt="">
            <span>登录</span>
          </div>
          <div :class="{'font-color':settingHover}" @mouseover="settingHover=true" @mouseout="settingHover=false">
            <img v-if="!settingHover" src="./img/setting1.png" alt="">
            <img v-else src="./img/setting2.png" alt="">
            <span>设置</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeTop',
  data () {
    return {
      showHead: true,
      value:'',//查询的值
      userHover:false, //按钮悬浮
      settingHover:false,
    }
  },
  mounted () {
    console.log('scroll-strat')
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      console.log('123');
      let scrolled = window.pageYOffset||document.documentElement.scrollTop; //兼容IE8
      this.showHead = scrolled < 500
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
.header-content {
  position: absolute;
  width: 100%;
  height: 200px;
  top: 0;
  .content {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    .logo {
      position: relative;
      width: 70px;
      height: 70px;
      text-align: center;
      color: #3e3a39;
      font-weight: bolder;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .search {
      position: relative;
      width: 500px;
      height: 40px;
      display: flex;
      input {
        height: 100%;
        width: 440px;
        padding: 6px 12px;
        font-size: 14px;
        border: 1px solid #ccc;
        &:focus {
          border-style: solid;
          border-color: #989898;
          box-shadow: 0 1px 2px #ddd;
        }
      }
      .button {
        position: relative;
        height: 100%;
        width: 60px;
        background-color: #df1e04;
        display: flex;
        align-items: center;
        justify-content: center;
        > img {
          width: 24px;
          height: 24px;
        }
      }
    }
    .login {
      position: absolute;
      width: 130px;
      height: 40px;
      top: 15px;
      right: 0;
      display: flex;
      justify-content: space-between;
      > div {
        width: 60px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        > img {
          width: 20px;
          height: 20px;
          margin-right: 3px;
        }
      }
      .font-color {
        color: #df1e04;
      }
    }
  }
}
/*平滑效果*/
@animate-style: top 0.2s cubic-bezier(0.17, 0.04, 0.03, 0.94);
.slide-up {
  -webkit-transition: @animate-style;
  transition: @animate-style;
  top: -200px !important;
}
.slide-down {
  -webkit-transition: @animate-style;
  transition: @animate-style;
}
</style>
