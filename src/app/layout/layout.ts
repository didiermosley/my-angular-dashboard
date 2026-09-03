import { Component, ElementRef, PLATFORM_ID, computed, effect, inject, signal, viewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { NAV_ITEMS } from './nav-items';
import { NavIcon } from './nav-icon';
import { THEMES, ThemeService } from '../theme/theme';

// Shell: sidebar navigation (off-canvas drawer on mobile) + routed content area
@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavIcon],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private router = inject(Router);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected navItems = NAV_ITEMS;
  protected theme = inject(ThemeService);
  protected paletteAccent = (name: string) => THEMES[name as keyof typeof THEMES].accent;

  protected drawerOpen = signal(false);
  protected openDrawer = () => this.drawerOpen.set(true);
  protected closeDrawer = () => this.drawerOpen.set(false);

  private scrollEl = viewChild<ElementRef<HTMLDivElement>>('scrollEl');
  protected headerHidden = signal(false);
  protected scrolled = signal(false);
  private lastScrollY = 0;

  private url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  protected active = computed(
    () => this.navItems.find((item) => this.url().includes(item.path)) ?? this.navItems[0],
  );

  constructor() {
    effect(() => {
      this.url();
      if (!this.isBrowser) return;
      this.lastScrollY = 0;
      this.headerHidden.set(false);
      this.scrolled.set(false);
      const el = this.scrollEl()?.nativeElement;
      if (el) el.scrollTop = 0;
    });
  }

  protected onScroll(event: Event) {
    const el = event.target as HTMLElement;
    const y = el.scrollTop;
    const dy = y - this.lastScrollY;

    if (Math.abs(dy) > 5) {
      this.headerHidden.set(dy > 0 && y > 24);
      this.lastScrollY = y;
    }
    this.scrolled.set(y > 12);
  }
}
