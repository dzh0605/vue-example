<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '多列表拖拽排序（vue.draggable.next）']" />

    <a-card class="text">
      实现多个列表之间的相互拖拽排序
    </a-card>

    <a-card class="general-card">
      <a-row>
        <a-col :span="6" class="box-1">
          <draggable :list="list_1" animation="300" group="people" :force-fallback="true" :ghost-class="ghostClass"
            :chosen-class="chosenClass" :drag-class="dragClass">

            <!-- 这里会自动遍历 -->
            <template #item="{ element }">
              <div class="item-left-class">
                {{ element.name }}
              </div>
            </template>

          </draggable>
        </a-col>

        <a-col :span="1"></a-col>

        <a-col :span="6" class="box-2">
          <draggable :list="list_2" animation="300" group="people" :force-fallback="true" :ghost-class="ghostClass"
            :chosen-class="chosenClass" :drag-class="dragClass">

            <!-- 这里会自动遍历 -->
            <template #item="{ element }">
              <div class="item-right-class">
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
  { name: "左1", id: 1 },
  { name: "左2", id: 2 },
  { name: "左3", id: 3 },
])

const list_2 = ref([
  { name: "右1", id: 1 },
  { name: "右2", id: 2 },
  { name: "右3", id: 3 },
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

      .item-left-class {
        width: 100%;
        height: 44px;
        border: 2px solid rgb(var(--blue-4));
        margin: 10px 0;
        font-size: 18px;
        text-align: center;
        line-height: 40px;
        user-select: none;
      }
    }

    .box-2 {
      padding: 20px;
      background-color: rgb(var(--green-1));

      .item-right-class {
        width: 100%;
        height: 44px;
        border: 2px solid rgb(var(--red-4));
        margin: 10px 0;
        font-size: 18px;
        text-align: center;
        line-height: 40px;
        user-select: none;
      }
    }

    .box-1:hover {
      cursor: move;
    }

    .box-2:hover {
      cursor: move;
    }

  }

}
</style>