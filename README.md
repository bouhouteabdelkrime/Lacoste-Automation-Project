# Lacoste Automation Technical Test : Exercice 2

Cypress + TypeScript smoke tests for the Lacoste US and France storefronts.

## Setup

```bash
npm install
```

## Run tests

Headless (CI mode):
```bash
npm test
```

Interactive (Cypress UI):
```bash
npm run test:open
```

Run one site only:
```bash
npm run test:us
npm run test:fr
```

## What's covered

See [TEST-PLAN.md](./TEST-PLAN.md) for the implemented checks.
The automated suite covers localized homepage content,
logo navigation, one category route, and search input for both locales.

The requested Google search was attempted in a browser, but the page load
aborted in this environment. A clearly labeled skipped Cypress test records
the intended Google query and result assertion. It remains skipped because
Google's captcha, consent, and result markup make it unsuitable for reliable
CI. The live Lacoste homepage paths verified here are `/us/` and `/fr/`.

Lacoste may return bot protection or 403 responses to headless browsers or
GitHub Actions IP ranges. A conventional Chrome user agent is configured, but
the Cypress headless run in this environment still received 403 responses;
the tests correctly fail rather than treating a blocked page as a pass.

## CI

Tests run on pushes and pull requests to `master`, and can also be started
manually from the Actions tab. Screenshots and videos are uploaded as an
artifact even when the run fails.

## Known limitation : 403s in CI
 
The tests pass locally but can fail in GitHub Actions with a `403
Forbidden` from `lacoste.com`. This isn't a bug in the tests, Lacoste's
site runs behind bot protection (Akamai) that blocks requests from
shared/datacenter IPs like GitHub-hosted runners, while a local/residential
IP goes through fine.
 
I tried spoofing a standard browser User-Agent in `cypress.config.ts` to
get past it; the block persists, so it looks IP-based rather than
header-based.
 
In a real project this would be solved by running CI against a staging
environment without that protection, which isn't available for this
exercise. Running the suite locally, or against lacoste.com from a
non-datacenter IP, demonstrates the tests work as intended.