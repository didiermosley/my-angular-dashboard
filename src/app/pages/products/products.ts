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
    { name: 'Flannel Shirt', sku: 'FS-076', price: '$68', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Chino Pants', sku: 'CP-133', price: '$84', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Knit Beanie', sku: 'KB-021', price: '$28', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Denim Jacket', sku: 'DJ-215', price: '$134', stockLabel: 'Low stock', stockBg: '#FEF3C7', stockColor: '#B45309' },
    { name: 'Leather Wallet', sku: 'LW-089', price: '$46', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Cotton Hoodie', sku: 'CH-162', price: '$72', stockLabel: 'Out of stock', stockBg: '#FEE2E2', stockColor: '#DC2626' },
    { name: 'Silk Tie', sku: 'ST-304', price: '$38', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Linen Trousers', sku: 'LT-247', price: '$92', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Corduroy Blazer', sku: 'CB-118', price: '$156', stockLabel: 'Low stock', stockBg: '#FEF3C7', stockColor: '#B45309' },
    { name: 'Cashmere Sweater', sku: 'CS-291', price: '$174', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Canvas Sneakers', sku: 'CN-055', price: '$64', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Rain Coat', sku: 'RC-372', price: '$118', stockLabel: 'Out of stock', stockBg: '#FEE2E2', stockColor: '#DC2626' },
    { name: 'Denim Overalls', sku: 'DO-198', price: '$106', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Wool Gloves', sku: 'WG-064', price: '$32', stockLabel: 'Low stock', stockBg: '#FEF3C7', stockColor: '#B45309' },
    { name: 'Leather Backpack', sku: 'LB-410', price: '$212', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Striped Polo', sku: 'SP-183', price: '$58', stockLabel: 'In stock', stockBg: '#ECFDF5', stockColor: '#059669' },
    { name: 'Puffer Vest', sku: 'PV-227', price: '$98', stockLabel: 'Low stock', stockBg: '#FEF3C7', stockColor: '#B45309' },
  ];
}
