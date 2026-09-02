import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
      { path: 'analytics', loadComponent: () => import('./pages/analytics/analytics').then((m) => m.Analytics) },
      { path: 'customers', loadComponent: () => import('./pages/customers/customers').then((m) => m.Customers) },
      { path: 'orders', loadComponent: () => import('./pages/orders/orders').then((m) => m.Orders) },
      { path: 'products', loadComponent: () => import('./pages/products/products').then((m) => m.Products) },
      { path: 'reports', loadComponent: () => import('./pages/reports/reports').then((m) => m.Reports) },
      { path: 'team', loadComponent: () => import('./pages/team/team').then((m) => m.Team) },
    ],
  },
];
