import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/pageCopy',
  name: 'pageCopy',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '页面仿写',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 6,
  },
  children: [
    {
      path: 'pageCopy_1',
      name: 'pageCopy_1',
      component: () => import('@/views/pageCopy/pageCopy_1/index.vue'),
      meta: {
        locale: '微信聊天框',
        requiresAuth: true,
        roles: ['*']
      }
    },

  ]
};

export default DASHBOARD;