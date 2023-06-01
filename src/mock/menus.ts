import { Menu } from 'src/app/types/menu';

export const menus: Menu[] = [
  {
    name: '概览',
    path: '/',
    icon: 'dashboard',
    uuid: 'dash',
  },
  {
    name: '系统配置',
    path: 'settings',
    icon: 'settings',
    uuid: 'settings',
    children: [
      {
        name: '账号管理',
        path: 'settings/accounts',
        icon: 'user',
        uuid: 'accounts.index',
      },
      {
        name: '权限管理',
        path: 'settings/permissions',
        icon: 'lock',
        target: 'blank',
        uuid: 'permissions.index',
      },
    ],
  },
];
