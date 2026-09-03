# MyAngularDashboard

An Angular 22 dashboard with a routed sidebar/content layout, SSR, and a responsive mobile mode.

## Structure

```
src/app/
  layout/            shell: sidebar nav (desktop) / off-canvas drawer (mobile) + routed content
    layout.ts/html/scss
    nav-items.ts      sidebar link config (label, path, subtitle)
    nav-icon.ts        icon renderer, switches on nav item path
  theme/
    theme.ts          ThemeService — 6 accent/soft/canvas palettes as CSS custom properties
  pages/
    analytics/        stat cards, revenue chart, top pages, top channels
    customers/        stat cards + table
    orders/           stat cards + table
    products/          stat cards + card grid
    reports/           downloadable report list
    team/               member card grid
```

Each page is a standalone component, lazy-loaded via `loadComponent` in `app.routes.ts`. `Layout` is the single parent route; all six pages render into its `<router-outlet>`. There's no separate mobile route tree — responsiveness is handled by CSS media queries inside the existing components.

To add a page: create a component under `pages/`, add one entry to `nav-items.ts`, add one lazy route in `app.routes.ts`.

## Responsive behavior

- **Desktop (>860px):** persistent sidebar, flush to the left/top/bottom edges (rounded only on the right), inline header with page title/subtitle + notification bell.
- **Mobile (≤860px):** sidebar becomes an off-canvas drawer (hamburger-triggered, backdrop, swipe-friendly), the header collapses to a compact bar (logo mark + hamburger left, bell right) that hides on scroll-down and reappears on scroll-up with a blurred background, and the page title/subtitle move into the content area as a heading above the cards. Tables collapse into stacked cards and stat grids drop to 2 columns.

## Theming

`ThemeService` (`theme/theme.ts`) exposes 6 palettes (indigo, teal, amber, rose, violet, slate). Selecting one writes `--accent` / `--soft` / `--canvas` onto `document.documentElement`, which the rest of the app consumes via `var(--accent)` etc. Switch themes from the swatch picker in the sidebar.

## SSR

Server-rendered via `@angular/ssr`. All 6 routes are prerendered at build time. Note: dynamic icon markup must be rendered via `@switch` in a template (see `nav-icon.ts`), not `[innerHTML]` — binding raw SVG through `innerHTML` crashes the prerender step (`NotYetImplemented` on `SVGElement.innerHTML` in Angular's prerender DOM).

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2, since updated to 22.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
