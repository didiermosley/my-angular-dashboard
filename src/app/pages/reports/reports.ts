import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {
  protected rows = [
    { title: 'Monthly revenue summary', period: 'August 2026', date: 'Sep 1, 2026' },
    { title: 'Customer growth report', period: 'Q3 2026', date: 'Aug 28, 2026' },
    { title: 'Inventory audit', period: 'August 2026', date: 'Aug 25, 2026' },
    { title: 'Marketing channel breakdown', period: 'Q3 2026', date: 'Aug 20, 2026' },
    { title: 'Team activity log', period: 'August 2026', date: 'Aug 15, 2026' },
  ];
}
