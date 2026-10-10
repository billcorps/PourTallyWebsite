# Website verification

## Public release and URL migration — October 10, 2026

The website now defaults to https://billcorps.github.io/PourTallyWebsite/. Download actions open the public Google Play listing directly. The beta enrollment component, route, styles, configuration, and sitemap entry have been removed; privacy and feedback copy now describe the public release.

Local checks before publication:

- Formatting, TypeScript, and the production build passed at the new base path: five prerendered documents and 141 local links/assets.
- All eight Play-listing verification tests and all 38 desktop/mobile browser checks passed.
- The live public Play listing check passed with network access.
- The parent BillCorps site was checked at 390px and 1440px. Its PourTally link points to the new address. Five redirects preserve the old home, app, insights, privacy, and beta links, including query strings and section anchors. The old beta URL leads to the new home page.
- The parent build preserves all public files, including app-ads.txt and Planet Removal, byte for byte.

The older reports below describe their historical state and are not current deployment instructions.

## PourTally rename — October 6, 2026

The current website uses PourTally throughout its navigation, page copy, accessibility labels, page titles, sharing metadata, FAQs, and privacy policy. The policy now states that PourTally is the new name for BarTally and that the name change does not change data handling. Existing package IDs, repository paths, tester links, support email, and ad-seller authorization are retained.

- Formatting and TypeScript checks passed.
- The final production build passed: six prerendered pages and 179 local links/assets.
- All eight publishing-check tests passed, including the new name, the legacy Play title during rollout, and rejection of a different app package.
- All 44 desktop/mobile browser checks passed, including navigation, accessibility, regional galleries, privacy links, JavaScript-disabled rendering, and layouts down to 320 pixels.
- After regenerated icon/favicon/social assets were copied, all 12 page-loading and gallery checks passed again against the rebuilt bundle. Page titles, sharing metadata, and the favicon title were also checked in the final build.
- The desktop home page, 320-pixel mobile home page, and mobile beta page were visually checked with the new wordmark; the longer name fits without clipping.
- The first Windows browser run needed its own preview process stopped after the tests to finish cleanup. The final asset checks used an explicitly managed hidden preview process and exited normally.

No commit, deployment, or live Play Console change was performed. The older screenshots and September verification below are historical records, may show the former name, and are not published website assets.

## Historical verification — September 14, 2026

Verified locally September 14, 2026 against the current BarTally app, refreshed English US and international metric promotional sets, and the new closed-test enrollment page. These checks cover the production preview at `/BarTallyWebsite/`.

## Current content

The site describes the 8,200+ drink catalog, optional nutrition with visible gaps, favorites with saved servings/places/named prices, and History's **Add past drinks** flow for favorites, catalog drinks, and custom drinks. Creating a custom drink adds a searchable definition without logging it. Prices remain optional, unknown amounts are separate from zero, and currencies are not converted.

Metrics descriptions include Today, This week, This month, 7 days, 30 days, 90 days, and All time, with Sunday or Monday week starts and device-local calendar dates. Counter widgets include the three calendar periods and rolling 24-hour, 7-day, and 30-day periods. Quick-log copy describes the five-second Undo. Widget illustrations are labeled. The privacy policy documents UTC timestamp storage, local display, calendar preferences, and offline named places.

The `/beta/` page explains how to join the BarTally Testers Google Group, opt into the closed test, and install from Google Play, in that order and using the same Google account. It includes the 14-day commitment, Android 11+ requirement, private testing feedback, and access troubleshooting. The home page, navigation, closing call to action, and footer link to enrollment. The site does not collect emails, confirm enrollment, or enroll visitors automatically.

## Checks

- `npm run format:check`: passed.
- `npm run build`: passed TypeScript, browser and server bundles, six prerendered HTML pages, and validation of 146 local links/assets, metadata, canonical paths, and section anchors.
- Six publishing-check tests passed: reachable BarTally listing, HTTP 404/429/503, unrelated successful response, and network failure. These run without network access as part of the build.
- `npm run test:e2e`: all 44 desktop Chromium and emulated Pixel 7 checks passed in 20.8 seconds.
- Browser coverage includes direct routes and refreshes, 404 routing, keyboard navigation, both regional galleries, spending examples and missing-price coverage, privacy and feedback anchors, reduced motion, and pages without JavaScript. All five content pages fit 320, 390, 768, 1024, and 1440 pixel viewports without horizontal scrolling.
- Beta checks verify the exact three enrollment links in the correct order, safe new-tab attributes, same-account instructions, duration, Android requirement, and entry points from the home page and navigation.
- No serious or critical Axe findings, JavaScript/hydration errors, broken local images/fonts, or unsolicited third-party requests were reported. This is targeted automated coverage, not a full accessibility certification.
- All 16 website app screenshots match the current Android regional originals. They are 1080 x 2400, 24-bit RGB PNGs. Home, Search, favorite editor, and nutrition have distinct US/metric versions. History, calendar overview, places, and spending use the same frames because no serving-volume text is visible in those frames.
- `public/images/social-card.png` matches the current 1024 x 500 feature graphic with the **Know your totals.** badge. Promotional app images contain no ads.
- `git diff --check`: passed.

App screenshots use fictional history and places. Browser checks do not enroll a Google account, install the private Play build, or submit feedback.

## Visual review

All five content pages were captured at 1440px and 390px after loading fonts and images. The beta page was reviewed on desktop and mobile for readable steps, button placement, spacing, and clipping. Existing captures include the refreshed home call to action, metric favorite editor, widget illustrations, and calendar explanation. Focused section captures suppress the sticky site header and unfocused skip link so they do not cover the reviewed section; full-page and hero captures retain the navigation.

| Page or section        | Desktop                                       | Mobile                                       |
| ---------------------- | --------------------------------------------- | -------------------------------------------- |
| Home                   | [Full page](home-desktop.png)                 | [Full page](home-mobile.png)                 |
| App overview           | [Full page](app-desktop.png)                  | [Full page](app-mobile.png)                  |
| Insights               | [Full page](insights-desktop.png)             | [Full page](insights-mobile.png)             |
| Join the beta          | [Full page](beta-desktop.png)                 | [Full page](beta-mobile.png)                 |
| Privacy                | [Full page](privacy-desktop.png)              | [Full page](privacy-mobile.png)              |
| Named prices           | [Section](favorite-prices-desktop.png)        | [Section](favorite-prices-mobile.png)        |
| Metric favorite editor | [Gallery](favorite-editor-metric-desktop.png) | [Gallery](favorite-editor-metric-mobile.png) |
| Widgets                | [Section](widgets-desktop.png)                | [Section](widgets-mobile.png)                |
| Calendar periods       | [Section](calendar-periods-desktop.png)       | [Section](calendar-periods-mobile.png)       |

The [desktop hero](home-hero.png) and [mobile hero](mobile-hero.png) show the initial viewport. Review captures are not included in the published site. Chromium uses device emulation; physical phones, Safari, and Firefox were not tested.

## Publication and reproduction

Default builds use William Haggerty as the developer, without a direct support email or configured public listing. The current publication check allows this beta website with preview privacy-policy wording and noindex metadata. The beta URLs are separate from the public-release setting; do not enable `VITE_PLAY_STORE_LIVE` merely to publish enrollment instructions. No Actions variables or Play Console settings were changed for this page.

Anonymous link checks returned HTTP 200 for the tester group and Google sign-in for the opt-in URL. The installation listing returned HTTP 404 for an anonymous visitor; installation still needs verification using an eligible, enrolled Google account. If a public Play URL is configured, `check:publish` continues to verify that listing and reject an unavailable or unrelated page. No support email was invented.

Pushes to `main` run the Website workflow, including the build and browser checks, then deploy to GitHub Pages. The shareable enrollment URL is [Join the BarTally beta](https://billcorps.github.io/BarTallyWebsite/beta/).

```powershell
npm run format:check
npm run build
npm run test:e2e
npm run check:publish
npm run preview
```

Open `http://127.0.0.1:4173/BarTallyWebsite/`. The test runner can start its own preview server. For a clean checkout, install dependencies and Playwright Chromium as described in the [website README](../README.md).
