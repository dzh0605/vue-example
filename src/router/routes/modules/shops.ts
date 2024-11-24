import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/draggable',
  name: 'draggable',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '元素拖拽',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 1,
  },
  children: [
    {
      path: 'shops',
      name: 'shops',
      component: () => import('@/views/draggable/draggable_1/index.vue'),
      meta: {
        locale: '拖拽排序（原生写法）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'vue_draggable_1',
      name: 'vue_draggable_1',
      component: () => import('@/views/draggable/vue_draggable_1/index.vue'),
      meta: {
        locale: '拖拽排序（vue.draggable.next）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'vue_draggable_2',
      name: 'vue_draggable_2',
      component: () => import('@/views/draggable/vue_draggable_2/index.vue'),
      meta: {
        locale: '水平拖拽（vue.draggable.next）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'vue_draggable_3',
      name: 'vue_draggable_3',
      component: () => import('@/views/draggable/vue_draggable_3/index.vue'),
      meta: {
        locale: '多列表拖拽排序（vue.draggable.next）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'vue_draggable_4',
      name: 'vue_draggable_4',
      component: () => import('@/views/draggable/vue_draggable_4/index.vue'),
      meta: {
        locale: '多列表拖拽样式（vue.draggable.next）',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'vue_draggable_5',
      name: 'vue_draggable_5',
      component: () => import('@/views/draggable/vue_draggable_5/index.vue'),
      meta: {
        locale: '拖拽分类示例（vue.draggable.next）',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;