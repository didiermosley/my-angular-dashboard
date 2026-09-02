import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
})
export class Analytics {
  protected stats = [
    { label: 'Revenue', value: '$84,210', delta: '+12.4%', deltaColor: '#059669' },
    { label: 'Sessions', value: '32,904', delta: '+4.1%', deltaColor: '#059669' },
    { label: 'Conversion', value: '3.8%', delta: '-0.3%', deltaColor: '#DC2626' },
    { label: 'Avg. order', value: '$127', delta: '+2.0%', deltaColor: '#059669' },
  ];

  protected weeklyBars = [
    { label: 'Mon', height: '58%' },
    { label: 'Tue', height: '72%' },
    { label: 'Wed', height: '46%' },
    { label: 'Thu', height: '88%' },
    { label: 'Fri', height: '64%' },
    { label: 'Sat', height: '95%' },
    { label: 'Sun', height: '40%' },
  ];

  protected channels = [
    { name: 'Organic search', pct: '42%' },
    { name: 'Direct', pct: '27%' },
    { name: 'Referral', pct: '18%' },
    { name: 'Social', pct: '13%' },
  ];
}
