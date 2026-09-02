import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  styleUrl: './customers.scss',
})
export class Customers {
  protected stats = [
    { label: 'Total customers', value: '4,812' },
    { label: 'New this month', value: '318' },
    { label: 'Churn rate', value: '1.9%' },
  ];

  protected rows = [
    { name: 'Ava Martinez', email: 'ava.martinez@flowly.com', plan: 'Pro', status: 'Active', statusBg: '#ECFDF5', statusColor: '#059669', joined: 'Mar 2024' },
    { name: 'Liam Chen', email: 'liam.chen@nimbus.io', plan: 'Team', status: 'Active', statusBg: '#ECFDF5', statusColor: '#059669', joined: 'Jan 2024' },
    { name: 'Sofia Rossi', email: 'sofia.rossi@brightlab.co', plan: 'Free', status: 'Trial', statusBg: '#FEF3C7', statusColor: '#B45309', joined: 'Aug 2026' },
    { name: 'Noah Williams', email: 'noah.w@dune.studio', plan: 'Pro', status: 'Active', statusBg: '#ECFDF5', statusColor: '#059669', joined: 'Nov 2023' },
    { name: 'Mia Johansson', email: 'mia.j@kelp.app', plan: 'Team', status: 'Past due', statusBg: '#FEE2E2', statusColor: '#DC2626', joined: 'Jun 2024' },
    { name: 'Ethan Park', email: 'ethan.park@hearth.co', plan: 'Free', status: 'Active', statusBg: '#ECFDF5', statusColor: '#059669', joined: 'Feb 2025' },
  ];
}
