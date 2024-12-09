<template>
  <div class="container">
    <div class="img-view">
      <div class="img-box">
        <div class="move-box">
          <div class="img img-url_1"></div>
          <div class="img img-url_2"></div>
          <div class="img img-url_3"></div>
          <div class="img img-url_4"></div>
          <div class="img img-url_5"></div>
          <div class="img img-url_1"></div>
        </div>

      </div>
    </div>

    <div class="main">
      <div class="main-box">
        <div class="main-avatar"></div>
        <div class="text" @click="goto">ding</div>
        <div class="line"></div>
        <div class="maxim">『七情拆解，无非心印；六欲所指，皆由心生。』</div>

        <div class="btn-box">
          <div class="btn" @click="goto">Let's go!</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const userStore = useUserStore();
const router = useRouter();

const goto = async () => {
  await userStore.login();
  router.push({
    name: 'shops',
  });
  // Message.success('登录成功');
}

</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;

  .img-view {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .img-box {
      width: 600%;
      height: 100vh;
      position: relative;
      animation: identifier 30s linear infinite;

      .move-box {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: nowrap;
        position: absolute;


        .img-url_1 {
          background-image: url('./img/bj_1.jpg');
        }

        .img-url_2 {
          background-image: url('./img/bj_2.jpg');
        }

        .img-url_3 {
          background-image: url('./img/bj_3.jpg');
        }

        .img-url_4 {
          background-image: url('./img/bj_4.jpg');
        }

        .img-url_5 {
          background-image: url('./img/bj_5.jpg');
        }

        .img {
          width: 100%;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }
      }

    }
  }

  .main {
    width: 100%;
    height: 100vh;
    position: absolute;
    /* 半透明背景色 */
    background: rgba(255, 255, 255, 0.2);
    /* 模糊效果 */
    backdrop-filter: blur(5px);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-box {
      width: 500px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .main-avatar {
        width: 104px;
        height: 104px;
        border-radius: 52px;
        border: 2px solid rgb(var(--gray-3));

        background-image: url('./img/avatar.png');
        background-position: center;
        background-size: cover;
      }

      .text {
        font-size: 26px;
        color: rgb(var(--gray-1));
        margin: 20px 0;

        cursor: pointer;
      }

      .line {
        width: 400px;
        height: 1px;
        background: linear-gradient(to right, rgb(var(--gray-5)), rgb(var(--gray-1)), rgb(var(--gray-5)));
      }

      .maxim {
        font-size: 16px;
        color: rgb(var(--gray-1));
        margin: 20px 0;
      }

      .btn-box {
        width: 250px;
        height: 60px;
        margin-top: 50px;

        .btn {
          width: 250px;
          height: 60px;
          position: absolute;
          z-index: 100;

          cursor: pointer;
          user-select: none;

          font-size: 26px;
          font-weight: bold;
          color: rgb(var(--gray-1));
          text-align: center;
          line-height: 60px;

          background: linear-gradient(90deg, rgb(var(--orange-5)), rgb(var(--blue-5)), rgb(var(--orange-5)));
          // 写在下面才能生效
          background-size: 400%;
          border-radius: 30px;

          animation: bj 18s linear infinite;
          opacity: 0.7;
        }

        // 创建一个伪元素作为该元素的第一个子元素
        .btn::before {
          // 子元素的内容为空
          content: "";

          // 将元素向外扩展
          position: absolute;
          left: -5px;
          right: -5px;
          top: -5px;
          bottom: -5px;

          background: linear-gradient(90deg, rgb(var(--orange-5)), rgb(var(--blue-5)), rgb(var(--orange-5)));
          animation: bj 18s linear infinite;

          // 写在下面才能生效
          background-size: 400%;
          border-radius: 30px;

          // 给元素添加图像效果，blur为模糊
          filter: blur(10px);
          z-index: -1;
        }

      }

    }
  }
}

@keyframes identifier {
  0% {
    right: 0%;
  }

  2% {
    right: 100%;
  }

  20% {
    right: 100%;
  }

  22% {
    right: 200%;
  }

  40% {
    right: 200%;
  }

  42% {
    right: 300%;
  }

  60% {
    right: 300%;
  }

  62% {
    right: 400%;
  }

  80% {
    right: 400%;
  }

  82% {
    right: 500%;
  }

  100% {
    right: 500%;
  }
}

@keyframes bj {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -400% 0;
  }
}
</style>