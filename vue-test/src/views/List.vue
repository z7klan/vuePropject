<template>
  <div>
    <ul>
      <li v-for="(item,index) in contentLists" :key="index">{{item.title}}--{{item.content}}</li>
    </ul>
  </div>
</template>

<script>
import store from "../store.js";
export default {
  data() {
    return {
    };
  },
  computed: {
    contentLists() {
      return store.state.listContent || [];
    }
  },
  store
};
</script>

