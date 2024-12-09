import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/loading',
  name: 'loading',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'loading',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 4,
  },
  children: [
    {
      path: 'loading_1',
      name: 'loading_1',
      component: () => import('@/views/loading/loading_1/index.vue'),
      meta: {
        locale: 'loading_1',
        requiresAuth: true,
        roles: ['*']
      }
    },

  ]
};

export default DASHBOARD;