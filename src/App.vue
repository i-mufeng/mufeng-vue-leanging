<script setup lang="ts">
import Directory from "@/components/directory.vue";
</script>

<template>
  <h1>VUE3 官网学习笔记</h1>
  <div id="wrapper">
    <aside id="aside">
      <Directory/>
    </aside>
    <div id="container">
      <RouterView/>
    </div>
  </div>

</template>

<style scoped>
h1 {
  text-align: center;
}
#wrapper {
  display: flex;
}
#aside {
  width: 20%;
}

</style>
