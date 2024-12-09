import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/communicate',
  name: 'communicate',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '组件通信',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 9,
  },
  children: [
    {
      path: 'communicate_1',
      name: 'communicate_1',
      component: () => import('@/views/communicate/communicate_1/index.vue'),
      meta: {
        locale: '入门使用',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;