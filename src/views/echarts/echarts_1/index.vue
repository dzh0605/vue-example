<template>
  <div class="container">
    <Breadcrumb :items="['echarts', '入门使用']" />

    <a-card class="text">
      <p>ECharts是一个使用JavaScript实现的开源可视化库</p>
      <p>安装：npm install echarts</p>
    </a-card>

    <a-card class="general-card">
      <p class="title">使用步骤</p>
      <p>步骤一：下载并引入echarts.js文件</p>
      <p>步骤二：准备一个具备大小的DOM容器</p>
      <p>步骤三：初始化echarts实例对象</p>
      <p>步骤四：指定配置项和数据(option)</p>
      <p>步骤五：将配置项设置给echarts实例对象</p>
    </a-card>

    <a-card class="general-card">
      <p class="title">基础配置项</p>
      <p>title：标题设置</p>
      <p>tooltip：工具提示</p>
      <p>xAxis：x轴</p>
      <p>yAxis：y轴</p>
      <p>series：图表系列信息</p>
      <p>toolbox：工具箱按钮</p>
      <p>legend：图例组件</p>
      <p>color：线条颜色</p>
      <p>grid：是否显示绘图网格</p>
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
    margin-bottom: 10px;

    .title {
      font-weight: bold;
    }
  }
}
</style>