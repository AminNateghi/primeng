import { MenuItem } from "primeng/api";

export const MENU_ITEMS_DATA: MenuItem[] = [
  {
    label: 'Home Page',
    icon: 'pi pi-home',
    routerLink: 'home'
  },
  {
    label: 'Steps Example',
    icon: 'pi pi-book',
    routerLink: 'steps'
  },
  {
    label: 'User Manager',
    icon: 'pi pi-user',
    disabled: true,
  },
];
