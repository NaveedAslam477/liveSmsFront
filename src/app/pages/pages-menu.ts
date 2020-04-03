import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: { icon: 'home', pack: 'fa-solid' },
    link: '/pages/User/dashboard',

    home: true,
  },
  {
    title: 'Client',
    icon: { icon: 'user-tie', pack: 'fa-solid' },
    link: '/pages/client/allclient',
    children: [
      {
        title: 'All Clients',
        icon: { icon: 'user-tie', pack: 'fa-solid' },
        link: '/pages/client/allclient',
      },
      {
        title: 'Add New Client',
        icon: { icon: 'user-tie', pack: 'fa-solid' },
         link: '/pages/client/addclient',
      },
    ],
  },
  {
    title: 'Contacts',
    icon: { icon: 'user-tie', pack: 'fa-solid' },
    link: '/pages/contact/contact-list',
    children: [
      {
        title: 'Phone Book',
        icon: { icon: 'user-tie', pack: 'fa-solid' },
        link: '/pages/contact/contact-list',
      },
    ],
  },
];
