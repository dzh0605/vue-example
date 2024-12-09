import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/components',
  name: 'components',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '常用组件',
    requiresAuth: true,
    icon: 'icon-unordered-list',
    order: 7,
  },
  children: [
    {
      path: 'codeBox',
      name: 'codeBox',
      component: () => import('@/views/components/codeBox/index.vue'),
      meta: {
        locale: '代码高亮',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'imgTextInput',
      name: 'imgTextInput',
      component: () => import('@/views/components/imgTextInput/index.vue'),
      meta: {
        locale: '图文输入框',
        requiresAuth: true,
        roles: ['*']
      }
    },
    {
      path: 'scroll',
      name: 'scroll',
      component: () => import('@/views/components/scroll/index.vue'),
      meta: {
        locale: '滚动条',
        requiresAuth: true,
        roles: ['*']
      }
    },
  ]
};

export default DASHBOARD;