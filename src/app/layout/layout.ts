import { Component, computed, inject, signal } from '@angular/core';
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

  protected navItems = NAV_ITEMS;
  protected theme = inject(ThemeService);
  protected paletteAccent = (name: string) => THEMES[name as keyof typeof THEMES].accent;

  protected drawerOpen = signal(false);
  protected openDrawer = () => this.drawerOpen.set(true);
  protected closeDrawer = () => this.drawerOpen.set(false);

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
}
