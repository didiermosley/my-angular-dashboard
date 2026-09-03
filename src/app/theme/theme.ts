import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeName = 'indigo' | 'teal' | 'amber' | 'rose' | 'violet' | 'slate';

export const THEMES: Record<ThemeName, { accent: string; soft: string; canvas: string }> = {
  indigo: { accent: '#4F46E5', soft: '#EEF0FF', canvas: '#F6F7FF' },
  teal: { accent: '#0F766E', soft: '#E2F2EF', canvas: '#F3FAF8' },
  amber: { accent: '#B45309', soft: '#FAEEDC', canvas: '#FEF9F2' },
  rose: { accent: '#BE123C', soft: '#FBE6EB', canvas: '#FEF6F8' },
  violet: { accent: '#7C3AED', soft: '#F1E9FE', canvas: '#FAF6FF' },
  slate: { accent: '#334155', soft: '#E6EBF3', canvas: '#F5F7FB' },
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  names = Object.keys(THEMES) as ThemeName[];
  current = signal<ThemeName>('indigo');
  colors = computed(() => THEMES[this.current()]);

  constructor() {
    effect(() => {
      if (!this.isBrowser) return;
      const { accent, soft, canvas } = this.colors();
      const root = document.documentElement.style;
      root.setProperty('--accent', accent);
      root.setProperty('--soft', soft);
      root.setProperty('--canvas', canvas);
    });
  }

  set(name: ThemeName) {
    this.current.set(name);
  }
}
