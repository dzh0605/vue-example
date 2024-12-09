<template>
  <div class="container">
    <Breadcrumb :items="['echarts', '容器响应式大小']" />

    <a-card class="text">
      容器大小发生变化时，图表大小也会随之变化。
      <HighLightJs :code="code"></HighLightJs>
    </a-card>

    <a-card class="general-card">
      <a-resize-box :directions="['right']"
        :style="{ width: '500px', height: '400px', minWidth: '300px', maxWidth: '700px' }">
        <div class="chart-container" ref="chartContainer"></div>
      </a-resize-box>
    </a-card>

  </div>
</template>

<script setup>
// 按需引入echarts
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

import { onMounted, onBeforeUnmount, ref } from 'vue';

import HighLightJs from '../../components/codeBox/highlightjs.vue';

const code = ref(
  `const resizeObserver = new ResizeObserver(() => {
  myChart.resize();
});

resizeObserver.observe(chartContainer.value);
resizeObserver.unobserve(chartContainer.value);
`)

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const chartContainer = ref();
let myChart;
let option;

const setEcharts = () => {
  // 指定渲染容器
  myChart = echarts.init(chartContainer.value);

  // 指定图表配置项和数据
  option = {
    xAxis: {
      type: 'category',
      data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

onMounted(() => {
  setEcharts();

  // 监听容器大小变化
  if (chartContainer.value) {
    resizeObserver.observe(chartContainer.value);
  }
});

// 监听容器大小变化
const resizeObserver = new ResizeObserver(() => {
  myChart.resize();
});

// 组件销毁时，移除监听
onBeforeUnmount(() => {
  if (chartContainer.value) {
    resizeObserver.unobserve(chartContainer.value);
  }
});

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

    .chart-container {
      width: calc(100% - 20px);
      height: 400px;
      margin-right: 20px;
      background-color: rgb(var(--gray-2));
      border-radius: 10px;
    }
  }
}
</style>