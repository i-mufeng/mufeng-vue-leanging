<script setup lang="ts">

const message = "测试文本MESSAGE"
const rawHtml = "<span style='color: #017d7a'> 测试HTML插入 </span> "
const dynamicClass = "dynamicClass";
const isButtonDisabled = true;
const id = 1;
const objectOfAttrs = {
  id: "container",
  class: "wrapper",
  style: "background-color:green;height:10px;width:20px;display:inline-block",
}
const argumentHtmlDemo = "<a v-bind:href=\"url\"> ... </a>\n" +
    "<!-- 简写 -->\n" +
    "<a :href=\"url\"> ... </a>"
const toTitleDate = (date: any) => {
  return "toTitleDate"
}

const formatDate = (date: any) => {
  return date.toLocaleDateString();
}

const date = new Date();

const ok = true

const number = 1;

</script>

<template>
  <h2>第一章 VUE3 模板语法</h2>
  <h3>文本插值</h3>
  <span>Message: {{ message }}</span>
  <hr>

  <h3>原始HTML</h3>
  <p>插入一段HTML代码：<span v-html="rawHtml"></span></p>
  <hr>

  <h3>Attribute 绑定</h3>
  <span>v-bind:class</span>
  <div v-bind:class="dynamicClass"></div>
  <span>等同于 :class</span>

  <div :class="dynamicClass"></div>
  <br>
  <span>disabled 绑定：</span>
  <button :disabled="isButtonDisabled">这是一个永久被禁用的按钮</button>

  <br>

  <span>动态绑定多个值：</span>
  <div v-bind="objectOfAttrs"></div>
  <hr>
  <h3>使用 JavaScript 表达式</h3>
  <ul>
    <li>{{ number + 1 }}</li>
    <li>{{ ok ? 'YES' : 'NO' }}</li>
    <li>{{ message.split('').reverse().join('') }}</li>
    <li>
      <div :id="`list-${id}`"></div>
    </li>
  </ul>

  <time :title="toTitleDate(date)">
    调用函数：{{ formatDate(date) }}
  </time>

  <hr>

  <h3>指令 Directives</h3>

  <table>
    <thead>
    <tr>
      <th>指令</th>
      <th>说明</th>
      <th>示例</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>v-text</td>
      <td> 等同于插值语法</td>
      <td> v-text="string"</td>
    </tr>
    <tr>
      <td>v-html</td>
      <td>插入普通 html，不支持 vue 语法</td>
      <td> v-html="daemonHtml"</td>
    </tr>
    <tr>
      <td>v-show</td>
      <td>根据其绑定值的真假改变元素的可见性（css display的值）</td>
      <td>v-show="isShow"</td>
    </tr>
    <tr>
      <td>v-if</td>
      <td>条件性的渲染元素</td>
      <td>v-if="boolean"</td>
    </tr>
    <tr>
      <td>v-else</td>
      <td>v-if 的 else 块</td>
      <td>v-else</td>
    </tr>
    <tr>
      <td>v-else-if</td>
      <td>多条件 v-if</td>
      <td>v-else-if</td>
    </tr>
    <tr>
      <td>v-for</td>
      <td>迭代某对象渲染元素或模块板</td>
      <td>v-for=""(item, index) in items"</td>
    </tr>
    <tr>
      <td>v-on</td>
      <td>为元素绑定事件监听器，可以缩写为@</td>
      <td>v-on:click="doThat('hello', $event)" | @[event]="doThat"</td>
    </tr>
    <tr>
      <td>v-bind</td>
      <td>动态绑定一个或多个Attribute，缩写为:</td>
      <td>v-bind:src="..." | :src="..."</td>
    </tr>
    <tr>
      <td>v-model</td>
      <td>表单输入元素或组件上的双向绑定</td>
      <td>input/select/textarea 等，v-model="test"</td>
    </tr>

    <tr>
      <td>v-slot</td>
      <td>声明具名插槽或是期望接收 props 的作用域插槽</td>
      <td>v-slot:header 等同于 #header</td>
    </tr>

    <tr>
      <td>v-pre</td>
      <td>跳过元素及子元素的编译</td>
      <td v-pre>插值语法会原样显示：{{test}}</td>
    </tr>

    <tr>
      <td>v-once</td>
      <td>元素及组件只渲染一次，跳过之后的更新</td>
      <td></td>
    </tr>
    <tr>
      <td>v-memo</td>
      <td>类似于v-once，传入条件不变时，元素不会重新渲染</td>
      <td></td>
    </tr>

    <tr>
      <td>v-cloak</td>
      <td>隐藏未完成编译的 DOM 模板</td>
      <td></td>
    </tr>

    </tbody>
  </table>

  <hr>
  <h3>参数 Arguments</h3>

  <pre><code v-text="argumentHtmlDemo"/></pre>

  <hr>

  <h3>完整的指令语法</h3>

  <div style="width: 100%;">
    <img src="https://cn.vuejs.org/assets/directive.DtZKvoAo.png" alt="">
  </div>

</template>

<style scoped>
.dynamicClass {
  display: inline-block;
  height: 15px;
  width: 20px;
  background: #035757;
  margin: 2px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table caption {
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
}

th, td {
  border: 1px solid #999;
  text-align: center;
  padding: 20px 0;
}

table thead tr {
  background-color: #008c8c;
  color: #fff;
}

table tbody tr:nth-child(odd) {
  background-color: #eee;
}

table tbody tr:hover {
  background-color: #ccc;
}

table tbody tr td:first-child {
  color: #f40;
}

table tfoot tr td {
  text-align: right;
  padding-right: 20px;
}

pre {
  background: #efefef;
  width: 60%;
}

img {
  width: 80%;
  margin: auto;
}

</style>