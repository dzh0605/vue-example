import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/layout',
  name: 'layout',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '布局',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 5,
  },
  children: [
    {
      path: 'float_1',
      name: 'float_1',
      component: () => import('@/views/layout/float_1/index.vue'),
      meta: {
        locale: '浮动布局（float）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'flex_1',
      name: 'flex_1',
      component: () => import('@/views/layout/flex_1/index.vue'),
      meta: {
        locale: '弹性布局（flex）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'grid_1',
      name: 'grid_1',
      component: () => import('@/views/layout/grid_1/index.vue'),
      meta: {
        locale: '网格布局（grid）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'gridstack_1',
      name: 'gridstack_1',
      component: () => import('@/views/layout/gridstack_1/index.vue'),
      meta: {
        locale: '拖拽布局（gridstack.js）',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;