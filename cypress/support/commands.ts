/// <reference types="cypress" />

// Accepts the cookie consent banner if it appears, so it doesn't
// block interactions later in the test.
Cypress.Commands.add('acceptCookies', () => {
  cy.get('body').then(($body) => {
    const consentButton = $body.find('#onetrust-accept-btn-handler').length
      ? $body.find('#onetrust-accept-btn-handler')
      : $body.find('button').filter((_index, button) =>
          /^(j'accepte|accepter|accept all|accept|continuer sans accepter)/i.test(
            button.textContent?.trim() ?? '',
          ),
        );
    if (consentButton.length) {
      cy.wrap(consentButton).click({ force: true });
    }
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      acceptCookies(): Chainable<void>;
    }
  }
}

export {};
