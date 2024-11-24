<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '水平拖拽（vue.draggable.next）']" />

    <a-card class="text">
      使用vue.draggable.next实现水平推拽
    </a-card>

    <a-card class="general-card">
      <draggable :list="list" class="main" animation="300" :force-fallback="true" :ghost-class="ghostClass"
        :chosen-class="chosenClass" :drag-class="dragClass">

        <!-- 这里会自动遍历 -->
        <template #item="{ element }">
          <div :class="element.class">
            {{ element.name }}
          </div>
        </template>

      </draggable>
    </a-card>

  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const list = ref([
  { name: 1, id: 1, class: "box1" },
  { name: 2, id: 2, class: "box2" },
  { name: 3, id: 3, class: "box3" }
])
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

    .main {
      display: flex;
      cursor: move;

      .box1 {
        width: 100px;
        height: 200px;
        margin-right: 20px;
        line-height: 200px;
        text-align: center;
        cursor: move;
        user-select: none;
        background-color: rgb(var(--orange-3));
      }

      .box2 {
        width: 100px;
        height: 200px;
        margin-right: 20px;
        line-height: 200px;
        text-align: center;
        cursor: move;
        user-select: none;
        background-color: rgb(var(--green-3));
      }

      .box3 {
        width: 100px;
        height: 200px;
        margin-right: 20px;
        line-height: 200px;
        text-align: center;
        cursor: move;
        user-select: none;
        background-color: rgb(var(--red-3));
      }
    }
  }
}
</style>