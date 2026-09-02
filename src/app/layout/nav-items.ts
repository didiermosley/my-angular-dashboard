export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: 'dashboard' },
  { label: 'Reports', path: 'reports' },
  { label: 'Settings', path: 'settings' },
];
