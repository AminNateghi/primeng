import { MenuItem } from "primeng/api";

export const MENU_ITEMS_DATA: MenuItem[] = [
  {
    label: 'Home Page',
    icon: 'pi pi-home',
  },
  {
    label: 'Testing',
    items: [
      {
        label: 'Steps',
        icon: 'pi pi-book',
      },
      {
        label: 'Open',
        icon: 'pi pi-fw pi-external-link',
        disabled: true,
      },
      { separator: true },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-times',
        disabled: true,
      }
    ]
  },
  {
    label: 'User Manager',
    icon: 'pi pi-fw pi-user',
    items: [
      { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
    ]
  },

];
