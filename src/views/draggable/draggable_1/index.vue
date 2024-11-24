<template>
  <div class="container">
    <Breadcrumb :items="['元素拖拽', '拖拽排序（原生写法）']" />

    <a-card class="text">
      原生写法，使用 draggable 属性，ondragstart、ondragend 等拖拽事件实现拖拽排序。
    </a-card>

    <a-card class="general-card">
      <div style="display: flex;">
        <div class="list" :ondragstart="ondragstart" :ondragend="ondragend" :ondragover="ondragover"
          :ondragenter="ondragenter" ref="list">
          <!-- draggable 控制元素是否可以拖拽 -->
          <!-- 拖拽的时候会有一个默认样式 -->
          <div draggable="true" class="list-item">1</div>
          <div draggable="true" class="list-item">2</div>
          <div draggable="true" class="list-item">3</div>
          <div draggable="true" class="list-item">4</div>
          <div draggable="true" class="list-item">5</div>
          <div draggable="true" class="list-item">6</div>
        </div>

        <div class="results">
          <div>当前排序结果为：</div>
          <div class="results-item" v-for="item in results">{{ item }}</div>
        </div>
      </div>

    </a-card>

  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue';

// 父元素
let list = ref();
// 当前选中的元素
let sourceNode;

// 拖拽开始时的事件
const ondragstart = (e) => {
  // 这里需要异步
  setTimeout(() => {
    e.target.className = "moving"
    sourceNode = e.target;
  }, 0)
}

// 拖拽结束时的事件
const ondragend = (e) => {
  setTimeout(() => {
    e.target.className = "list-item"
  }, 0)
}

// 元素拖拽经过时
const ondragover = (e) => {
  e.preventDefault();
}

// 元素进入时的事件
const ondragenter = (e) => {
  e.preventDefault();
  if (e.target === list.value || e.target === sourceNode) {
    return;
  }

  // 拿到所有的元素
  const children = [...list.value.children];
  // 拖拽元素下标
  const sourceIndex = children.indexOf(sourceNode);
  // 插入元素的下标
  const targetIndex = children.indexOf(e.target);

  if (sourceIndex > targetIndex) {
    // 向上插入
    list.value.insertBefore(sourceNode, e.target)
  } else if (sourceIndex < targetIndex) {
    // 向下插入
    list.value.insertBefore(sourceNode, e.target.nextElementSibling)
  }

  Array.from(list.value.children).forEach((item, index) => {
    results.value[index] = item.innerText;
  })
}

// 排序的结果
let results = ref([]);

onMounted(() => {
  Array.from(list.value.children).forEach((item, index) => {
    results.value[index] = item.innerText;
  })
})
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

    .list {
      width: 300px;

      .list-item {
        margin: 20px 0;
        line-height: 40px;
        height: 40px;
        background: rgb(var(--gray-6));
        border-radius: 5px;

        color: rgb(var(--gray-1));
        font-size: 20px;
        text-align: center;

        // 定义在元素上光标的形状光标形状
        cursor: move;
        // 定义文本是否可以选中
        user-select: none;
      }

      // 元素在拖拽时的样式
      // 中间没有空格，表示同时获取两个元素的样式
      .moving {
        margin: 20px 0;
        height: 40px;
        border-radius: 5px;
        // 将颜色设置为透明
        background: transparent;
        color: transparent;
        border: 1px dashed #ccc;
      }
    }

    .results {
      height: 50px;
      line-height: 50px;
      background-color: rgb(var(--green-1));
      font-size: 16px;

      margin-left: 20px;
      margin-top: 20px;
      padding: 0 20px;
      border-radius: 5px;

      display: flex;
      align-items: center;

      .results-item {
        height: 30px;
        line-height: 30px;
        background-color: rgb(var(--green-2));
        margin-right: 10px;
        padding: 3px 10px;
      }
    }
  }
}
</style>