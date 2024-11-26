<template>
  <div class="container">
    <Breadcrumb :items="['波浪效果', '可升降波浪']" />

    <a-card class="text">
      可升降波浪效果
    </a-card>

    <a-card class="general-card">
      <div class="btn">
        <div class="up" @click="up">上升</div>
        <div class="down" @click="down">下降</div>
      </div>

      <div class="box-1">
        <div class="box-2">
          <div class="box-3">
            <div class="box-4"></div>
            <div class="box-4"></div>
          </div>

        </div>
      </div>
    </a-card>

  </div>
</template>

<script setup>

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
          width: 1200px;
          height: 300px;
          display: flex;
          position: absolute;
          animation: move 1.5s linear infinite;

          .box-4 {
            width: 600px;
            height: 300px;
            background-image: url("../img/wave_1.png");
            background-size: 100% 100%;
          }
        }

        @keyframes move {
          0% {
            left: 0;
          }

          100% {
            left: -200%;
          }
        }
      }
    }

  }
}
</style>