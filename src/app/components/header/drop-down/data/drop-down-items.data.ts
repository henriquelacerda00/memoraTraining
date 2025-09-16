import { IdropDownItems } from '../drop-down-items.interface';

export const DROP_DOWN_ITEMS: IdropDownItems[] = [
  { label: 'Manage My Account', icon: 'pi pi-user', route: '/perfil' },
  { label: 'My Orders', icon: 'pi pi-shopping-bag', route: '' },
  {
    label: 'My Cancellations',
    icon: 'pi pi-times-circle',
    route: '/profile',
  },
  { label: 'My Reviews', icon: 'pi pi-star', route: '' },
  { label: 'Logout', icon: 'pi pi-sign-out', route: '/login', isLogout : true },
];
