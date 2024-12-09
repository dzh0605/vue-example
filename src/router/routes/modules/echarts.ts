import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/echarts',
  name: 'echarts',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'echarts',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 8,
  },
  children: [
    {
      path: 'echarts_1',
      name: 'echarts_1',
      component: () => import('@/views/echarts/echarts_1/index.vue'),
      meta: {
        locale: '入门使用',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'echarts_2',
      name: 'echarts_2',
      component: () => import('@/views/echarts/echarts_2/index.vue'),
      meta: {
        locale: '浏览器响应式大小',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'echarts_3',
      name: 'echarts_3',
      component: () => import('@/views/echarts/echarts_3/index.vue'),
      meta: {
        locale: '容器响应式大小',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'echarts_4',
      name: 'echarts_4',
      component: () => import('@/views/echarts/echarts_4/index.vue'),
      meta: {
        locale: '可控图表类型',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'line_1',
      name: 'line_1',
      component: () => import('@/views/echarts/line_1/index.vue'),
      meta: {
        locale: '（折线图）基础图形',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'line_2',
      name: 'line_2',
      component: () => import('@/views/echarts/line_2/index.vue'),
      meta: {
        locale: '（折线图）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'bar_1',
      name: 'bar_1',
      component: () => import('@/views/echarts/bar_1/index.vue'),
      meta: {
        locale: '（柱状图）基础图形',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;