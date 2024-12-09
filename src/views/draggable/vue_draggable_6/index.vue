<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '克隆拖拽（vue.draggable.next）']" />

    <a-card class="text">
      实现克隆拖拽，左侧列表的元素可以克隆到右侧列表。
    </a-card>

    <a-card class="general-card">
      <a-row>
        <a-col :span="6" class="box-1">
          <draggable :list="list_1" :item-key="index" animation="300" :force-fallback="true" :ghost-class="ghostClass"
            :chosen-class="chosenClass" :drag-class="dragClass" :group="{ name: 'people', pull: 'clone' }">

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
          <draggable :list="list_2" :item-key="index" animation="300" :force-fallback="true" :ghost-class="ghostClass"
            :chosen-class="chosenClass" :drag-class="dragClass" :group="{ name: 'people' }">

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
import { pull } from "lodash";
import { ref } from "vue";
import draggable from "vuedraggable";

const list_1 = ref([
  { name: "1", id: 1, style: "left-1 item" },
  { name: "2", id: 2, style: "left-2 item" },
  { name: "3", id: 3, style: "left-3 item" },
])

const list_2 = ref([
  { name: "1", id: 4, style: "right-1 item" },

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