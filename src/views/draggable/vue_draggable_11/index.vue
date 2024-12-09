<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '树形拖拽（vue.draggable.next）']" />

    <a-card class="text">
      使用拖拽组件嵌套的方式实现树形结构的拖拽。
    </a-card>

    <a-card class="general-card">

    </a-card>

  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";


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