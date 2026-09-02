import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  protected stats = [
    { label: 'Open orders', value: '128' },
    { label: 'Fulfilled today', value: '46' },
    { label: 'Refunds this week', value: '5' },
  ];

  protected rows = [
    { id: '#10482', customer: 'Ava Martinez', items: '3 items', total: '$212.00', status: 'Shipped', statusBg: '#ECFDF5', statusColor: '#059669' },
    { id: '#10481', customer: 'Liam Chen', items: '1 item', total: '$58.00', status: 'Processing', statusBg: '#FEF3C7', statusColor: '#B45309' },
    { id: '#10480', customer: 'Sofia Rossi', items: '5 items', total: '$340.50', status: 'Shipped', statusBg: '#ECFDF5', statusColor: '#059669' },
    { id: '#10479', customer: 'Noah Williams', items: '2 items', total: '$89.99', status: 'Refunded', statusBg: '#FEE2E2', statusColor: '#DC2626' },
    { id: '#10478', customer: 'Mia Johansson', items: '4 items', total: '$276.20', status: 'Processing', statusBg: '#FEF3C7', statusColor: '#B45309' },
    { id: '#10477', customer: 'Ethan Park', items: '1 item', total: '$41.00', status: 'Shipped', statusBg: '#ECFDF5', statusColor: '#059669' },
  ];
}
