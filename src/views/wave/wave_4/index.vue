<template>
  <div class="container">
    <Breadcrumb :items="['波浪效果', '多层可升降波浪']" />

    <a-card class="text">
      多层可升降波浪效果
    </a-card>

    <a-card class="general-card">
      <div class="btn">
        <div class="up" @click="up">上升</div>
        <div class="down" @click="down">下降</div>
        <div class="numShow">{{ `${numShow + 50}%` }}</div>
      </div>

      <div class="box-1">
        <div class="box-2">
          <div ref="moveBox1" class="box-3"></div>
          <div ref="moveBox2" class="box-4"></div>
          <div ref="moveBox3" class="box-5"></div>
          <div ref="moveBox4" class="box-6"></div>
        </div>
      </div>
    </a-card>

  </div>
</template>

<script setup>
import { Message } from '@arco-design/web-vue';
import { ref } from 'vue';

// 盒子标记
const moveBox1 = ref()
const moveBox2 = ref()
const moveBox3 = ref()
const moveBox4 = ref()

// 百分比显示
const numShow = ref(0)

// 上升
const up = () => {
  if (numShow.value < 50) {
    numShow.value += 10
    moveBox1.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"
    moveBox2.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"
    moveBox3.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"
    moveBox4.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"

  } else {
    Message.warning("已达最大值")
  }
}

// 下降
const down = () => {
  if (numShow.value > -50) {
    numShow.value -= 10
    moveBox1.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"
    moveBox2.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"
    moveBox3.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"
    moveBox4.value.style.bottom = numShow.value / 5 * 18 - 420 + "px"

  } else {
    Message.warning("已达最小值")
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

    .btn {
      display: flex;
      margin-bottom: 30px;

      .up {
        width: 100px;
        height: 40px;
        background-color: rgb(var(--green-2));
        font-size: 18px;
        text-align: center;
        line-height: 40px;
        border-radius: 20px;
        user-select: none;
        cursor: pointer;
        margin-right: 20px;
      }

      .down {
        width: 100px;
        height: 40px;
        background-color: rgb(var(--cyan-2));
        font-size: 18px;
        text-align: center;
        line-height: 40px;
        border-radius: 20px;
        user-select: none;
        cursor: pointer;
        margin-right: 20px;
      }

      .numShow {
        width: 100px;
        height: 40px;
        border: 2px solid rgb(var(--purple-2));
        font-size: 18px;
        text-align: center;
        line-height: 36px;
        border-radius: 20px;
      }
    }

    .box-1 {
      width: 320px;
      height: 320px;
      border: 2px solid rgb(var(--blue-4));
      border-radius: 160px;
      padding: 8px;

      .box-2 {
        width: 300px;
        height: 300px;
        border-radius: 150px;
        overflow: hidden;
        position: relative;

        .box-3 {
          width: 900px;
          height: 600px;
          background-image: url("../img/wave_2.png");
          background-size: 100% 100%;
          position: absolute;
          bottom: -420px;
          animation: move 1.7s linear infinite;
          opacity: 0.5;
        }

        .box-4 {
          width: 900px;
          height: 600px;
          background-image: url("../img/wave_3.png");
          background-size: 100% 100%;
          position: absolute;
          bottom: -420px;
          animation: move 1.5s linear infinite;
          opacity: 0.5;
        }

        .box-5 {
          width: 900px;
          height: 600px;
          background-image: url("../img/wave_4.png");
          background-size: 100% 100%;
          position: absolute;
          bottom: -420px;
          animation: movetwo 1.7s linear infinite;
          opacity: 0.5;
        }

        .box-6 {
          width: 900px;
          height: 600px;
          background-image: url("../img/wave_5.png");
          background-size: 100% 100%;
          position: absolute;
          bottom: -420px;
          animation: movetwo 1.5s linear infinite;
          opacity: 0.5;
        }

        @keyframes move {
          0% {
            left: 0;
          }

          100% {
            left: -150%;
          }
        }

        @keyframes movetwo {
          0% {
            left: -150%;
          }

          100% {
            left: 0;
          }
        }
      }
    }

  }
}
</style>