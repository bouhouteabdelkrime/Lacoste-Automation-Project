import './commands';

// Lacoste's homepage can throw unrelated third-party JS errors
// (ads, consent banners). Don't fail the test suite on those.
Cypress.on('uncaught:exception', () => false);
