<template>
  <div>
    <router-view></router-view>
    <ul>
      <li>
        <router-link :to="{name:'list'}">新闻列表</router-link>
      </li>
      <li>
        <router-link :to="{name:'user'}">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    flex: 1;
  }
  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    color: #000;
    &.active {
      background: #42b983;
      color: #fff;
    }
  }
}
</style>
