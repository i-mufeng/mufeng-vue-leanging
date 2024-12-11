<script setup lang="ts">

import {reactive, ref} from "vue"

const test = ref<string>("test content")

const testNumber = ref<number>(0)

const increment = () => {
  testNumber.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

</script>

<template>
  <h2>第二章 响应式基础</h2>
  <h3>声明响应式状态</h3>

  <p>在组合式API中，推荐使用 ref( ) 声明响应式状态</p>

  <p>
    <span>绑定文本内容：</span>
    <span style="background: aquamarine;width: fit-content">{{ test }}</span>
    <br>
    <input type="text" v-model="test"/>
  </p>
  <p>
    <span>绑定Number内容：</span>
    <span style="background: aquamarine;width: fit-content">{{ testNumber }}</span>
    <br>
    <button @click="increment">plus number</button>
    <button @click="testNumber++">plus number</button>
  </p>
  <p>
    <span>绑定对象：</span>
    <span style="background: aquamarine;width: fit-content">{{ JSON.stringify(obj) }}</span>
    <br>
    <button @click="obj.nested.count++">plus number</button>
    <button @click="mutateDeeply">plus number and push elements</button>
  </p>

  <h3>nextTick() 方法更新 DOM</h3>

  <h3></h3>

</template>

<style scoped>

</style>