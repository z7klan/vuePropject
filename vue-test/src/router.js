import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Add from "./views/Add.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [ 
    {
      path: "/",
      name: "login",
      component: Login
    },
    //当访问不存在页面时给出默认页面
    {
      path: "*",
      component: Add
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      redirect: "/home/list",
      children: [
        {
          path: "list",
          name: "list",
          component: () => import(/* webpackChunkName: "List" */ "./views/List.vue"),
        },
        {
          path: "user",
          name: "user",
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "User" */ "./views/User.vue"),
        }
      ]
    },
    {
      path: "/add",
      name: "add",
      component: Add
    }
  ]
});
