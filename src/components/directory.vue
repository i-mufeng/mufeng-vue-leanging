<script setup lang="ts">
import {ref} from "vue";

const directories = ref<Array<any>>(
    [
      {name: "首页 ", uri: "/"},
      {name: "第一章 VUE3 模板语法", uri: "/template-syntax"},
      {name: "第二章 响应式基础", uri: "/reactivity-fundamentals"},
    ]
);

</script>

<template>
  <div>
    <h2>目录</h2>
    <ul>
      <li v-for="dir in directories">
        <RouterLink :to="dir.uri">{{ dir.name }}</RouterLink>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>