<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '拖拽排序（vue.draggable.next）']" />

    <a-card class="text">
      <p>vue.draggable.next是一款vue3的拖拽插件，是vue.draggable升级版本</p>
      <p>基于Sortable.js实现的，你可以用它来拖拽列表、菜单、工作台、选项卡等常见的工作场景</p>
      <p>npm i -S vuedraggable@next</p>
      <p>yarn add vuedraggable@next</p>
    </a-card>

    <a-card class="text">
      使用vue.draggable.next实现的简单的拖拽排序
    </a-card>

    <a-card class="general-card">
      <div class="itxst">
        <div>
          <draggable :list="state.list" ghost-class="ghost" chosen-class="chosenClass" drag-class="dragClass"
            :force-fallback="true" animation="300" @start="onStart" @end="onEnd">
            <template #item="{ element }">
              <div class="item">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </a-card>

  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import draggable from "vuedraggable";

const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  list: [
    { name: "www.itxst.com", id: 0 },
    { name: "www.baidu.com", id: 1 },
    { name: "www.google.com", id: 2 },
  ],
});

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
};

</script>

<style scoped lang="less">
.container {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  .text {
    width: 100%;
    margin-bottom: 10px;
    border: none;
  }

  .general-card {
    width: 100%;

    .itxst {
      width: 600px;
      display: flex;
      cursor: move;
    }

    .itxst>div:nth-of-type(1) {
      flex: 1;
    }

    .itxst>div:nth-of-type(2) {
      width: 270px;
      padding-left: 20px;
    }

    .item {
      height: 50px;
      line-height: 50px;
      border: solid 1px rgb(var(--gray-4));
      padding: 0 10px;
      text-align: left;
      background-color: rgb(var(--gray-0));

      // 文字不可选中
      user-select: none;
    }

    // 鼠标悬停时改为拖拽光标
    .item:hover {
      cursor: move;
    }

    .item+.item {
      margin-top: 10px;
    }


    // 拖动时的样式
    .ghost {
      border: solid 5px rgb(var(--blue-5));
      line-height: 40px;
      opacity: 0.5;
    }

    // 选中时的样式
    .chosenClass {
      background-color: rgb(var(--orange-5));
    }

    // 拖拽过程中的样式
    .dragClass {
      opacity: 1;
      background-color: rgb(var(--red-5));
    }
  }
}
</style>