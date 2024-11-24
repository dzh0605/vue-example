<template>
  <div class="container">
    <Breadcrumb :items="['动画', '放大动画（FLIP）']" />

    <a-card class="text">
      使用FLIP实现丝滑放大动画。
    </a-card>

    <a-card class="general-card">
      <div class="main-box">
        <div class="box box_0" @click="clickBox">200px*250px</div>
        <div class="box box_1" @click="clickBox">160px*210px</div>
        <div class="box box_2" @click="clickBox">190px*270px</div>
        <div class="box box_3" @click="clickBox">210px*300px</div>
        <div class="box box_4" @click="clickBox">210px*160px</div>
        <div class="box box_5" @click="clickBox">270px*190px</div>

        <!-- 蒙层 -->
        <div ref="mask" class="mask" @click="clickMask"></div>

        <!-- 放大图片的容器 -->
        <div ref="pic"></div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 蒙层
let mask = ref()

// 放大图片的容器
let pic = ref()

// 点击蒙层
const clickMask = () => {
  // 关闭蒙层
  mask.value.style.display = "none";
  pic.value.innerHTML = "";
}

// 点击元素
const clickBox = (e) => {

  // 打开蒙层
  mask.value.style.display = "block";

  // 克隆节点
  let cloneDom = e.target.cloneNode(true);

  // 第一步
  // 获取初始位置信息
  // getBoundingClientRect() 方法获取元素大小，在视窗中的位置
  let firstInfo = e.target.getBoundingClientRect()

  // 第二步
  // 获取结束位置信息
  cloneDom.className = cloneDom.className + " picture-zoom-in"
  pic.value.appendChild(cloneDom)
  let lastInfo = cloneDom.getBoundingClientRect()

  // 第三步
  // 计算变化的数据数据
  let invertInfo = {
    x: firstInfo.x - lastInfo.x,
    y: firstInfo.y - lastInfo.y,
  }

  cloneDom.style.transformOrigin = "50% 50%"
  cloneDom.style.transform = `scale(1) translate(calc(-100% + ${invertInfo.x}px),calc(-100% + ${invertInfo.y}px))`

  // 第四步
  // 设定过度动画，删除第三步的transform
  setTimeout(() => {
    cloneDom.style.transition = "all 0.5s"
    cloneDom.style.transformOrigin = ''
    cloneDom.style.transform = ``
  })
}
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

    .main-box {
      display: flex;

      .box {
        border: 1px solid #ccc;
        margin-left: 10px;
        margin-top: 10px;
        text-align: center;
      }

      .box_0 {
        width: 200px;
        height: 250px;
        background-color: #ffa39e;
        color: #000000;
        line-height: 250px;
      }

      .box_1 {
        width: 160px;
        height: 210px;
        background-color: #ffd8bf;
        line-height: 210px;

      }

      .box_2 {
        width: 190px;
        height: 270px;
        background-color: #ffd591;
        line-height: 270px;
      }

      .box_3 {
        width: 210px;
        height: 300px;
        background-color: #ffe58f;
        line-height: 300px;
      }

      .box_4 {
        height: 160px;
        width: 210px;
        background-color: #ffbee8;
        color: #ffffff;
        line-height: 160px;
      }

      .box_5 {
        height: 190px;
        width: 270px;
        background-color: #936ee3;
        color: #ffffff;
        line-height: 190px;
      }

      // 蒙层样式
      .mask {
        // 相对视窗进行定位
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: 0.7;
        z-index: 999;
        display: none;
        justify-content: center;
        align-items: center;
      }

      // 图片容器样式
      .picture-zoom-in {
        position: fixed;
        z-index: 9999;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(2);
        text-align: center;
      }
    }
  }
}
</style>