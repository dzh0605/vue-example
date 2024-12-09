<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '组间拖拽限制（vue.draggable.next）']" />

    <a-card class="text">
      拖拽进出限制，只可从左侧列表拖入右侧列表
    </a-card>

    <a-card class="general-card">
      <a-row>
        <a-col :span="6" class="box-1">
          <draggable :list="list_1" animation="300" :group="{ name: 'people', pull: true, put: false }"
            :force-fallback="true" :ghost-class="ghostClass" :chosen-class="chosenClass" :drag-class="dragClass">

            <!-- 这里会自动遍历 -->
            <template #item="{ element }">
              <div :class="element.style">
                {{ element.name }}
              </div>
            </template>

          </draggable>
        </a-col>

        <a-col :span="1"></a-col>

        <a-col :span="6" class="box-2">
          <draggable :list="list_2" animation="300" :group="{ name: 'people', pull: false, put: true }"
            :force-fallback="true" :ghost-class="ghostClass" :chosen-class="chosenClass" :drag-class="dragClass">

            <!-- 这里会自动遍历 -->
            <template #item="{ element }">
              <div :class="element.style">
                {{ element.name }}
              </div>
            </template>

          </draggable>
        </a-col>
      </a-row>
    </a-card>

  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const list_1 = ref([
  { name: "左1", id: 1, style: "left-1 item" },
  { name: "左2", id: 2, style: "left-2 item" },
  { name: "左3", id: 3, style: "left-3 item" },
])

const list_2 = ref([
  { name: "右1", id: 1, style: "right-1 item" },
  { name: "右2", id: 2, style: "right-2 item" },
  { name: "右3", id: 3, style: "right-3 item" },
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

    .box-1 {
      padding: 20px;
      background-color: rgb(var(--orange-1));
    }

    .box-2 {
      padding: 20px;
      background-color: rgb(var(--green-1));
    }

    .box-1:hover {
      cursor: move;
    }

    .box-2:hover {
      cursor: move;
    }

    .item {
      width: 100%;
      height: 50px;
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      margin: 10px 0;
      user-select: none;
    }

    .left-1 {
      background-color: rgb(var(--orange-3));
    }

    .left-2 {
      background-color: rgb(var(--orange-3));
    }

    .left-3 {
      background-color: rgb(var(--orange-3));
    }

    .right-1 {
      background-color: rgb(var(--red-3));
    }

    .right-2 {
      background-color: rgb(var(--red-3));
    }

    .right-3 {
      background-color: rgb(var(--red-3));
    }

  }
}
</style>