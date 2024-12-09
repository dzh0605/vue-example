<template>
  <div class="container">
    <Breadcrumb :items="['echarts', '浏览器响应式大小']" />

    <a-card class="text">
      浏览器视窗大小发生变化时，图表会重新渲染。
      <HighLightJs :code="code"></HighLightJs>
    </a-card>

    <a-card class="general-card">
      <div class="chart-container" ref="chartContainer"></div>
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
  `window.addEventListener('resize', resizeChart);
  
const resizeChart = () => {
  myChart.resize();
}
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

const resizeChart = () => {
  // 改变图表尺寸，在容器大小发生改变时需要手动调用。
  myChart.resize();
}

// 监听浏览器窗口大小变化
// 不建议直接在参数里面写函数，否则事件可能无法移除。
window.addEventListener('resize', resizeChart);

// 监听容器大小变化
const resizeObserver = new ResizeObserver(() => {
  myChart.resize();
});

// 移除事件监听
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart);

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
      width: 100%;
      height: 400px;
      margin-right: 20px;
      background-color: rgb(var(--gray-2));
      border-radius: 10px;
    }
  }
}
</style>