<template>
  <div class="login">
	  <div class="login-content" v-if="!showSinginThen">
			<div class="login-select">
				<span :class="{ active: status === 0 }" @click="status=0">登录</span>
				<span :class="{ active: status !== 0 }" @click="status=1">注册</span>
			</div>
			<div class="content-info" @keyup.enter="enterSingin">
				<div class="login-div" v-show="!status">
					<div class="block-area">
						<label for="userName">username</label>
						<input type="text" id="userName" v-model="username" placeholder="登陆用户名">
					</div>
					<div class="block-area">
						<label for="userPwd" >password</label>
						<input type="password" id="userPwd" ref="usePwd" v-model="password" placeholder="登陆密码">
					</div>
					<input type="button" value="登录" @click="subInfo">
				</div>
				<div class="singin-div" v-show="status">
					<div class="block-area">
						<label for="suserName">username</label>
						<input type="text" id="suserName" v-model="susername" placeholder="注册用户名">
					</div>
					<div class="block-area">
						<label for="suserPwd" >password</label>
						<input type="password" id="suserPwd" ref="susePwd" v-model="spassword" placeholder="注册密码">
					</div>
					<input type="button" value="注册" @click="singin">
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  name:'login',
  data(){
    return {
      showSinginThen:false,
      status:0, //0是登录，1是注册
	    username: '',
      password: '',
      susername: '',
      spassword: '',
      rightSigninName: ''
    }
  },
  mounted(){

  },
  methods:{
    subInfo () {
      if (this.status === 0) {
        this.login()
        return
      }
      this.singin()
    },
    login(){

    },
    singin(){

    },
    enterSingin () {
      if (this.$refs.usePwd === document.activeElement || this.$refs.suserPwd === document.activeElement) {
        if (this.status) {
          this.singin()
        } else {
          this.login()
        }
      }
    },
  }
}
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  > .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    min-height: 300px;
    max-width: 340px;
    padding: 5px 0px;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(0, 0, 0, 0.4);
    > .login-select {
      width: 100%;
      height: 48px;
      line-height: 48px;
      font-size: 0;
      padding: 0 5px;
      box-sizing: border-box;
      > span {
        display: inline-block;
        font-size: 16px;
        color: #fff;
        width: 50%;
        text-align: center;
        vertical-align: middle;
        position: relative;
        cursor: pointer;
        &.active {
          &:before {
            content: '';
            width: 30%;
            height: 2px;
            background: #fff;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
          }
        }
      }
    }
    > .content-info {
      position: relative;
      box-sizing: border-box;
      padding: 20px 20px;
      .singin-div,
      .login-div {
        .block-area {
          margin: 10px 0 20px 0;
        }
        label,
        input {
          display: block;
        }
        label {
          color: #aaa;
          font-size: 14px;
        }
        input[type='text'],
        input[type='password'],
        input[type='email'] {
          background: transparent;
          outline: none;
          height: 36px;
          width: 100%;
          color: #fff;
          text-indent: 4px;
          font-size: 14px;
          border: none;
          border-bottom: 1px solid #aaa;
          box-sizing: border-box;
          &:focus {
            border-bottom: 1px solid #fff;
          }
        }
        input[type='button'] {
          background: rgba(255, 12, 12, 0.03);
          border: 1px solid rgba(255, 12, 12, 0.03);
          height: 32px;
          width: 100%;
          border-radius: 2px;
          color: #fff;
          height: 36px;
          line-height: 36px;
          margin-top: 30px;
          margin-bottom: 10px;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
          &:hover {
            background: rgba(255, 12, 12, 0.05);
          }
        }
      }
    }
  }
}
</style>
