<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '拖拽锚点（vue.draggable.next）']" />

    <a-card class="text">
      拖拽锚点，鼠标在特定区域拖拽才可以使用拖拽功能。
    </a-card>

    <a-card class="general-card">
      <div ref="main">
        <draggable :list="list" class="main" animation="300" :force-fallback="true" :ghost-class="ghostClass"
          :chosen-class="chosenClass" :drag-class="dragClass" handle=".move" @start="handleStart" @end="handleEnd">

          <!-- 这里会自动遍历 -->
          <template #item="{ element }">
            <div :class="element.class">
              {{ element.name }}
              <div class="move"></div>
            </div>
          </template>

        </draggable>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const main = ref();

const list = ref([
  { name: 1, id: 1, class: "box1" },
  { name: 2, id: 2, class: "box2" },
  { name: 3, id: 3, class: "box3" }
])

const handleStart = () => {
  main.value.classList.add("box-move");
}

const handleEnd = () => {
  main.value.classList.remove("box-move");
}

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

      .box1 {
        width: 100px;
        height: 200px;
        margin-right: 20px;
        line-height: 200px;
        text-align: center;
        user-select: none;
        background-color: rgb(var(--orange-3));
      }

      .box2 {
        width: 100px;
        height: 200px;
        margin-right: 20px;
        line-height: 200px;
        text-align: center;
        user-select: none;
        background-color: rgb(var(--green-3));
      }

      .box3 {
        width: 100px;
        height: 200px;
        margin-right: 20px;
        line-height: 200px;
        text-align: center;
        user-select: none;
        background-color: rgb(var(--red-3));
      }

      .move {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: rgb(var(--orangered-6));

        position: relative;
        top: -180px;
        left: 25px;

        cursor: move;
      }
    }
  }
}

.box-move {
  cursor: move;
}
</style>