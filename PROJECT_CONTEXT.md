# A1 Termite & Pest Control — Project Context

## Project summary

Responsive Angular demo website for A1 Termite & Pest Control, focused on Melbourne homes and businesses. The Home page follows the supplied reference layout but uses the A1 blue, charcoal and pale-blue palette. Ant control is the only completed service detail page.

## Implemented

- Angular 17 standalone application with lazy-loaded routes.
- Shared responsive header and footer across Home, Ant Control and placeholder service routes.
- Header has direct Home and Services links. Services scrolls to the Home services section; there is no Services dropdown.
- Home page includes responsive hero and local interior photography, service cards, process steps, residential/commercial information, and quote form.
- Ant Control page at `/services/ant-control` includes a compact hero, CSS ant illustration, treatment process, species cards, FAQs and quote form.
- Quote links target the relevant page's form. The ant hero quote action scrolls to `#ant-quote` with sticky-header offset.
- Phone links use `tel:+61406161308` so tapping them on a phone opens the dialer. Mobile footer phone is left-aligned across the footer width.
- Responsive layouts constrain service cards, forms and sections to the viewport and use compact mobile process cards.
- Latest CSS refinement pass consolidated responsive rules into ordered breakpoint groups and removed obsolete styles from earlier header/footer and dropdown iterations.
- Tablet navigation (761–960px) uses a dedicated two-row layout, with matching scroll offset for anchored sections.
- Service cards use consistent blue icon treatments, aligned mobile action rows and blue hover/focus states; global keyboard focus indicators are visible.
- Reduced-motion preferences are respected by anchor scrolling and by page transitions/animations.
- Latest iPhone Pro Max refinement reduced the Ant Control hero headline and centered/grouped the mobile navigation links.
- Main headings on Home and Ant Control now use a slightly more restrained responsive scale. The Home mobile contact headline stays around 30–32px for a modest reduction while preserving its hierarchy.
- Quote forms currently show an on-page confirmation only; no email/API backend is connected.

## Architecture

- `src/main.ts` bootstraps `AppComponent`, configures `provideRouter`, and enables anchor scrolling and scroll restoration.
- `src/app/app.component.ts` hosts the root router outlet.
- `src/app/app.routes.ts` mounts `SiteLayoutComponent` as the parent route. Home, Ant Control and generic service placeholder pages are lazy-loaded child routes.
- `src/app/site-layout/` owns the shared header, router outlet, footer and route-aware header quote link.
- `src/app/home/` contains the Home component and its page-specific HTML/SCSS/TypeScript.
- `src/app/ant-page/` contains the Ant Control component and its page-specific HTML/SCSS/TypeScript.
- `src/app/service-placeholder/service-placeholder.component.ts` is an intentionally empty destination for unfinished service pages.
- `src/styles.css` contains global reset, typography and overflow rules. Component styles are in SCSS files.
- The latest visual refinement touched `src/app/home/home.component.scss`, `src/app/ant-page/ant-page.component.scss`, `src/app/site-layout/site-layout.component.scss` and `src/styles.css`.
- `src/assets/home-interior.jpg` and `src/assets/home-living.jpg` are local image assets used on Home. Angular copies `src/assets` to the build output via `angular.json`.

## Files created or modified

### Angular app/configuration

- `package.json`, `package-lock.json`
- `angular.json`, `tsconfig.json`, `tsconfig.app.json`
- `src/index.html`, `src/main.ts`, `src/styles.css`
- `src/app/app.component.ts`, `src/app/app.routes.ts`

### Shared shell and pages

- `src/app/site-layout/site-layout.component.ts`
- `src/app/site-layout/site-layout.component.html`
- `src/app/site-layout/site-layout.component.scss`
- `src/app/home/home.component.ts`
- `src/app/home/home.component.html`
- `src/app/home/home.component.scss`
- `src/app/ant-page/ant-page.component.ts`
- `src/app/ant-page/ant-page.component.html`
- `src/app/ant-page/ant-page.component.scss`
- `src/app/service-placeholder/service-placeholder.component.ts`

### Local assets and supplied references

- `src/assets/home-interior.jpg`, `src/assets/home-living.jpg`
- Original reference and review screenshots are in the project root; keep them as references.

## Decisions and instructions to preserve

- Keep the blue, charcoal and pale-blue color theme. Do not switch to the earlier green/terracotta experiment.
- Keep the Services navigation as a direct section link; the user explicitly does not want a dropdown.
- Keep one shared header/footer across all routes.
- Keep the Home page as the main landing page and the Ant Control page under Services. Other service routes can remain empty until their pages are requested.
- Prioritize mobile usability and fit all content to device width. Check navigation, cards, forms, and the footer at narrow widths.
- Keep the visual style simple and professional. The user initially requested no animations; do not add decorative motion.
- Use the existing call number `0406 161 308` with international dial target `+61406161308`.
- Quote form success state is a demo-only interaction until a real submission destination is supplied.
- Preserve existing information when editing project notes. At the time of this context save, no prior `PROJECT_CONTEXT.md` or `TASKS.md` existed.

## Current status, pending work, and known issues

- Production build most recently completed successfully with `npm run build`; rebuild after the current cross-page heading refinement.
- No known compile/build errors remain.
- The latest CSS refinement pass is complete; no visual browser review has been performed after that pass.
- The quote forms do not send or persist enquiries; connect them to the client's chosen email/API/CRM before production use.
- The other service routes render an intentionally blank placeholder. Replace them with real pages when their content is ready.
- Confirm whether the supplied phone, starting price ($180), service coverage, and appointment wording are approved client details.
- Review final mobile screenshots on a real device or browser emulator after future CSS edits. Several layout refinements were made from full-page iPhone screenshots.
- The project does not yet include deployment configuration, privacy policy content, or confirmed image attribution text.

## Exact next steps

1. From `E:\Freelance\AntProject`, run `npm start` and open the local URL printed by Angular CLI.
2. Review `/` and `/services/ant-control` at desktop, tablet (761–960px), iPhone 16 and narrow mobile widths. Confirm the header, Services anchor, quote targets, card widths, focus states, reduced-motion behavior, phone links and footer alignment.
3. If the demo is approved, ask which destination should receive quote requests, then replace each `submitQuote()` confirmation-only handler with a real submission and success/error states.
4. Build the remaining service routes only after the client supplies/approves their content; retain the shared layout.
5. Confirm contact/pricing/coverage/privacy details and image attribution, then prepare deployment settings.
6. Re-run `npm run build` after implementation changes.
