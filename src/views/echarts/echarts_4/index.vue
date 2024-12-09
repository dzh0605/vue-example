<template>
  <div class="container">
    <Breadcrumb :items="['echarts', '可控图表类型']" />

    <a-card class="text">
      下面示例可以选择数据展示的图标类型
    </a-card>

    <a-card class="general-card">
      <a-select v-model="chartType">
        <a-option value="line">折线图</a-option>
        <a-option value="bar">柱状图</a-option>
      </a-select>

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

import { onMounted, ref, watch } from 'vue';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const chartContainer = ref();
let myChart;
let option;
const chartType = ref('line');

watch(() => chartType.value, () => {
  setEcharts();
})

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
        type: chartType.value,
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option);
}

onMounted(() => {
  setEcharts();
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

    :deep(.arco-select-view-single){
      width: 600px;
      margin-bottom: 20px;
    }

    .chart-container {
      width: 600px;
      height: 400px;
      background-color: rgb(var(--gray-2));
      border-radius: 10px;
    }
  }
}
</style>