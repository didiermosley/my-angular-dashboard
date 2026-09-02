export interface NavItem {
  label: string;
  path: string;
  subtitle: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Analytics', path: 'analytics', subtitle: 'Traffic, revenue, and channel performance' },
  { label: 'Customers', path: 'customers', subtitle: 'Everyone using your product' },
  { label: 'Orders', path: 'orders', subtitle: 'Recent order activity' },
  { label: 'Products', path: 'products', subtitle: 'Catalog status and inventory' },
  { label: 'Reports', path: 'reports', subtitle: 'Generated reports and exports' },
  { label: 'Team', path: 'team', subtitle: 'People with access to this workspace' },
];
