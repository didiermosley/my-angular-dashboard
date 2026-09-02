import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-icon',
  template: `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      @switch (name()) {
        @case ('analytics') {
          <path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" />
        }
        @case ('customers') {
          <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" /><circle cx="17" cy="8" r="2.7" /><path d="M17 13.2c2.3.4 4.2 2.4 4.5 5.3" />
        }
        @case ('orders') {
          <path d="M6 6h15l-1.5 9h-12z" /><path d="M6 6L4.5 3H2" /><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" />
        }
        @case ('products') {
          <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" /><path d="M3.5 7.5L12 12l8.5-4.5" /><path d="M12 12v9" />
        }
        @case ('reports') {
          <path d="M6 3h9l4 4v14H6z" /><path d="M15 3v4h4" /><path d="M9 13h6M9 16.5h6" />
        }
        @case ('team') {
          <circle cx="8" cy="8" r="3" /><circle cx="16" cy="8" r="3" /><path d="M2.5 19c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" /><path d="M12.5 14c2.7.2 5 2.3 5.3 5" />
        }
      }
    </svg>
  `,
})
export class NavIcon {
  name = input.required<string>();
}
