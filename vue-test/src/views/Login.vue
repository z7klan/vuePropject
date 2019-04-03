<template>
  <div>
    <p>
      <span>用户名:</span>
      <input type="text" v-model="userName">
    </p>
    <p>
      <span>密码:</span>
      <input type="password" v-model="password">
    </p>
    <p v-if="loginFlag">
      <span>确认密码:</span>
      <input type="password" v-model="confirmPsd">
    </p>
    <div v-if="loginFlag">
      <button type="button" @click="sureReg">确定</button>
      <button type="button" @click="calcel">取消</button>
    </div>
    <div v-else>
      <button type="button" @click="login">登录</button>
      <button type="button" @click="regist">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginFlag: false,
      userName: "",
      password: "",
      confirmPsd: ""
    };
  },
  methods: {
    login() {
      let userName = localStorage.getItem("userName");
      let password = localStorage.getItem("password");
      if (userName == this.userName && password == this.password) {
        this.$router.push("/home");
      } else {
        alert("用户名或密码不正确");
      }
    },
    regist() {
      this.loginFlag = true;
    },
    sureReg() {
      if (this.password == this.confirmPsd) {
        localStorage.setItem("userName", this.userName);
        localStorage.setItem("password", this.password);
        this.userName = "";
        this.password = "";
        this.confirmPsd = "";
        this.loginFlag = false;
      } else {
        alert("两次密码不一致!");
      }
    },
    calcel() {
      this.userName = "";
      this.password = "";
      this.confirmPsd = "";
      this.loginFlag = false;
    }
  }
};
</script>

