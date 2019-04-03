<template>
  <div>
    <p>User</p>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$router.push("/add");
    }
  }
};
</script>
