import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/button',
  name: 'button',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '按钮',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 3,
  },
  children: [
    {
      path: 'button_1',
      name: 'button_1',
      component: () => import('@/views/button/button_1/index.vue'),
      meta: {
        locale: '常规按钮',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'button_2',
      name: 'button_2',
      component: () => import('@/views/button/button_2/index.vue'),
      meta: {
        locale: '渐变按钮',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'button_3',
      name: 'button_3',
      component: () => import('@/views/button/button_3/index.vue'),
      meta: {
        locale: '流动渐变按钮',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;