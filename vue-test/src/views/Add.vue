<template>
  <div>
    <p>标题</p>
    <input type="text" v-model="title">
    <p>内容</p>
    <textarea v-model="content"></textarea>
    <div>
      <button @click="add">添加</button>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
export default {
  data() {
    return {
      title: "", 
      content: ""
    };
  },
  store,
  methods: {
    add() {
      store.commit("storageCotent", {
        content: this.content,
        title: this.title
      });
      this.title = "";
      this.content = "";
      this.$router.push("/home/user");
    }
  }
};
</script>

