<template>
  <div class="container">
    <Breadcrumb :items="['常用组件', '代码高亮']" />

    <a-card class="text">
      代码高亮组件
    </a-card>

    <a-card class="text">
      <p>组件名称：highlight.js</p>
      <p>npm install highlight.js</p>
      <p>yarn add highlight.js</p>
    </a-card>

    <a-card class="general-card">
      <HighLightJs :code="code"></HighLightJs>
    </a-card>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import HighLightJs from './highlightjs.vue';

const code = ref(
  `const a = 1;
const b = 2;
const c = a + b;
console.log(c);
`);

</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;

  .text {
    width: 100%;
    margin-bottom: 10px;
    border: none;
  }

  .general-card {
    width: 100%;
  }
}
</style>