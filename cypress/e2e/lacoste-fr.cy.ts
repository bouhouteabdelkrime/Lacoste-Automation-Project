describe('Lacoste FR', () => {
  const  homePath = '/fr/homme.html';

  beforeEach(() => {
    cy.visit(homePath);
    cy.acceptCookies();
    cy.dismissGeoPopup();
  });

  it('renders the homepage correctly', () => {
    cy.location('pathname').should('include', homePath);
    cy.title().should('match', /Lacoste/i);
    cy.get('html').should('have.attr', 'lang').and('match', /fr/i);
    cy.get('header').should('be.visible');
    cy.get('nav').should('be.visible');
    cy.contains('nav a', /homme/i).should('be.visible');
    cy.contains('nav a', /femme/i).should('be.visible');
  });

  it.skip('logo returns to the homepage', () => {
    cy.contains('Cadeaux Crocodile').click({ force: true });
    cy.location('pathname').should('not.eq', homePath);
    cy.get('header a').first().click();
    cy.location('pathname').should('include', homePath);
  });

  it('search field accepts a product query', () => {
    cy.get('input[placeholder="Rechercher un produit"]')
      .filter(':visible')
      .first()
      .should('be.enabled')
      .type('polo')
      .should('have.value', 'polo');
  });
});