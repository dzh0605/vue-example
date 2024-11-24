import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/vue_draggable',
  name: 'vue_draggable',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '波动效果',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 2,
  },
  children: [
    {
      path: 'vue_draggable_1',
      name: 'vue_draggable_1',
      component: () => import('@/views/draggable/vue_draggable_1/index.vue'),
      meta: {
        locale: 'vue.draggable.next-1',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;