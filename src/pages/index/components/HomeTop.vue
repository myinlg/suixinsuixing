<template>
  <div class="header">
    <div class="header-content" :class="[showHead ? 'slide-down':'slide-up']">
      <div class="content content-wrapper">
        <div class="logo">
          <img src="./img/logo.jpg" alt="">
          <div class="title">随心随性</div>
        </div>
        <div class="search-panel">
          <div class="search">
            <input v-model="value" placeholder="请输入..."/>
            <div class="button">
              <img src="./img/search.png" alt="">
            </div>
          </div>
          <div class="hot-words">
            热词：
            <a href="">HTML5</a>
            <a href="">CSS3</a>
            <a href="">Vue</a>
            <a href="">JQery</a>
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
      <div class="menu">
        <div class="content-wrapper">
          <div v-if="!showHead" class="logo">
            <img src="./img/logo.jpg" alt="">
          </div>
          <Menu class="menu-list"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from './Menu'
export default {
  name: 'HomeTop',
  components:{
    Menu
  },
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
  .header-content {
    position: absolute;
    width: 100%;
    height: 140px;
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
        height: 84px;
        text-align: center;
        color: #3e3a39;
        font-weight: bolder;
        img {
          width: 60px;
          height: 60px;
        }
        .title {
          position: relative;
          height: 24px;
          line-height: 24px;
        }
      }
      .search-panel {
        position: relative;
        margin-left: 150px;
        .search {
          position: relative;
          width: 500px;
          height: 40px;
          display: flex;
          > input {
            height: 30px;
            width: 440px;
            padding: 4px 12px;
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
        .hot-words {
          position: relative;
          width: 100%;
          height: 30px;
          line-height: 30px;
          > a {
            margin-right: 3px;
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
  .menu {
    position: relative;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    > .content-wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      > .logo {
        position: relative;
        width: 40px;
        height: 40px;
        margin-right: 30px;
        > img {
          height: 100%;
          width: 100%;
        }
      }
      > .menu-list {
        flex: 1;
      }
    }
  }
}

/*平滑效果*/
@animate-style: top 0.2s cubic-bezier(0.17, 0.04, 0.03, 0.94);
.slide-up {
  -webkit-transition: @animate-style;
  transition: @animate-style;
  top: -140px !important;
}
.slide-down {
  -webkit-transition: @animate-style;
  transition: @animate-style;
}
</style>
