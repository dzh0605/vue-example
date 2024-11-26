<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '拖拽分类示例（vue.draggable.next）']" />

    <a-card class="text">
      使用vue.draggable.next插件实现拖拽分类
    </a-card>

    <a-card class="general-card">
      <div class="text-box">请将左侧生物拖入到指定分类中，分类完成后点击提交验证</div>
      <a-row>
        <a-col :span="6" class="box-0">
          <div class="text-item">生物</div>
          <draggable :list="list_0" animation="300" group="people" :force-fallback="true" :ghost-class="ghostClass"
            :chosen-class="chosenClass" :drag-class="dragClass">

            <!-- 这里会自动遍历 -->
            <template #item="{ element }">
              <div class="item">
                {{ element.name }}
              </div>
            </template>

          </draggable>
        </a-col>

        <a-col :span="1"></a-col>

        <a-col :span="6" class="box-1">
          <div class="text-item">动物</div>
          <draggable :list="list_1" animation="300" group="people" :force-fallback="true" :ghost-class="ghostClass"
            :chosen-class="chosenClass" :drag-class="dragClass">

            <!-- 这里会自动遍历 -->
            <template #item="{ element }">
              <div class="item">
                {{ element.name }}
              </div>
            </template>

          </draggable>
        </a-col>

        <a-col :span="1"></a-col>

        <a-col :span="6" class="box-2">
          <div class="text-item">植物</div>
          <draggable :list="list_2" animation="300" group="people" :force-fallback="true" :ghost-class="ghostClass"
            :chosen-class="chosenClass" :drag-class="dragClass">

            <!-- 这里会自动遍历 -->
            <template #item="{ element }">
              <div class="item">
                {{ element.name }}
              </div>
            </template>

          </draggable>
        </a-col>

        <a-col :span="1"></a-col>

        <a-col :span="3">
          <div class="reset" @click="reset">重置</div>
          <div class="submit" @click="submit">提交</div>
        </a-col>
      </a-row>

    </a-card>

  </div>
</template>

<script setup>
import { Message } from "@arco-design/web-vue";
import { ref } from "vue";
import draggable from "vuedraggable";

const list_0 = ref([
  { name: "兔子", id: 1 },
  { name: "仙人掌", id: 2 },
  { name: "蝴蝶", id: 3 },
  { name: "雪松", id: 4 },
])

const list_1 = ref([
])

const list_2 = ref([
])

const res_1 = [
  { name: "兔子", id: 1 },
  { name: "蝴蝶", id: 3 },
]

const res_2 = [
  { name: "仙人掌", id: 2 },
  { name: "雪松", id: 4 },
]

// 判断数组相等
const isArrEqual = (arr1, arr2) => {

  arr1 = arr1.map(JSON.stringify)
  arr2 = arr2.map(JSON.stringify)

  return arr1.length === arr2.length && arr1.every((ele) => arr2.includes(ele));
};

// 重置
const reset = () => {
  list_0.value = [
    { name: "兔子", id: 1 },
    { name: "仙人掌", id: 2 },
    { name: "蝴蝶", id: 3 },
    { name: "雪松", id: 4 },
  ]

  list_1.value = []
  list_2.value = []
}

// 提交验证
const submit = () => {
  if (list_0.value.length !== 0) {
    Message.warning("请完成分类操作！")

  } else {

    if (isArrEqual(list_1.value, res_1) && isArrEqual(list_2.value, res_2)) {
      Message.success("分类正确！")

    } else {
      Message.warning("分类错误！")
    }
  }
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

    .text-box {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  .box-0 {
    padding: 20px;
    background-color: rgb(var(--cyan-1));
  }

  .box-1 {
    padding: 20px;
    background-color: rgb(var(--orange-1));
  }

  .box-2 {
    padding: 20px;
    background-color: rgb(var(--green-1));
  }

  .box-0:hover {
    cursor: move;
  }

  .box-1:hover {
    cursor: move;
  }

  .box-2:hover {
    cursor: move;
  }

  .text-item {
    text-align: center;
    font-size: 18px;
  }

  .item {
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    margin: 10px 0;
    user-select: none;
    background-color: rgb(var(--red-3));
  }

  .reset {
    width: 100%;
    height: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    background-color: rgb(var(--pinkpurple-2));
    border-radius: 25px;
    cursor: pointer;
    user-select: none;
    margin-bottom: 10px;
  }

  .submit {
    width: 100%;
    height: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    background-color: rgb(var(--purple-2));
    border-radius: 25px;
    cursor: pointer;
    user-select: none;
  }

}
</style>