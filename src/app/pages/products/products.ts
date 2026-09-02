import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  protected stats = [
    { label: 'Active products', value: '212' },
    { label: 'Low stock', value: '9' },
    { label: 'Out of stock', value: '3' },
  ];

  protected rows = [
    { name: 'Field Jacket', sku: 'FJ-102', price: '$148', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Canvas Tote', sku: 'CT-044', price: '$52', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Wool Scarf', sku: 'WS-019', price: '$64', stockLabel: 'Low stock', stockBg: '#FEF3C7', stockColor: '#B45309' },
    { name: 'Leather Belt', sku: 'LB-208', price: '$78', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Denim Shirt', sku: 'DS-331', price: '$96', stockLabel: 'Out of stock', stockBg: '#FEE2E2', stockColor: '#DC2626' },
    { name: 'Suede Boots', sku: 'SB-057', price: '$188', stockLabel: 'Low stock', stockBg: '#FEF3C7', stockColor: '#B45309' },
  ];
}
