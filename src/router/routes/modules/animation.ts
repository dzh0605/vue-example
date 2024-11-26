import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/animation',
  name: 'animation',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '动画',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 1,
  },
  children: [
    {
      path: 'flip_1',
      name: 'flip_1',
      component: () => import('@/views/animation/flip_1/index.vue'),
      meta: {
        locale: '放大动画（FLIP）',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;