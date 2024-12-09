import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/wave',
  name: 'wave',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '波浪效果',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 2,
  },
  children: [
    {
      path: 'wave_1',
      name: 'wave_1',
      component: () => import('@/views/wave/wave_1/index.vue'),
      meta: {
        locale: '方形波浪',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'wave_2',
      name: 'wave_2',
      component: () => import('@/views/wave/wave_2/index.vue'),
      meta: {
        locale: '圆形波浪',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'wave_3',
      name: 'wave_3',
      component: () => import('@/views/wave/wave_3/index.vue'),
      meta: {
        locale: '可升降波浪',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'wave_4',
      name: 'wave_4',
      component: () => import('@/views/wave/wave_4/index.vue'),
      meta: {
        locale: '多层可升降波浪',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;