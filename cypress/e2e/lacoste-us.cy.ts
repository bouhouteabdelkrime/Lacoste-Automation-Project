describe('Lacoste US', () => {
  const homePath = '/us/';

  beforeEach(() => {
    cy.visit(homePath);
    cy.acceptCookies();
    cy.dismissGeoPopup();
  });

  it('renders the homepage correctly', () => {
    cy.location('pathname').should('include', homePath);
    cy.title().should('match', /Lacoste/i);
    cy.get('html').should('have.attr', 'lang').and('match', /en/i);
    cy.get('header').should('be.visible');
    cy.get('nav').should('be.visible');
    cy.contains('nav a', /men/i).should('be.visible');
    cy.contains('nav a', /women/i).should('be.visible');
  });

  it('logo returns to the homepage', () => {
    cy.contains('nav a', /men/i).click();
    cy.location('pathname').should('not.eq', homePath);
    cy.get('header a').first().click();
    cy.location('pathname').should('include', homePath);
  });

  it('search field accepts a product query', () => {
    cy.get('input[placeholder*="Find a product" i]')
      .filter(':visible')
      .first()
      .should('be.enabled')
      .type('polo shirt')
      .should('have.value', 'polo shirt');
  });

  it('search returns a "no results" state for a nonsense query', () => {
    cy.get('input[placeholder*="Find a product" i]')
      .filter(':visible')
      .first()
      .type('zzzqwertynotaproduct{enter}');

    cy.contains(/no results/i).should('be.visible');
  });

  it('adding a product to the cart', () => {
    cy.visit('/us/lacoste/men/accessories/jewelry/JL153BN.html?color=045&size=M') 
    cy.contains('button', /add to (shopping )?bag/i).should('be.enabled').click();
    cy.contains(/added to your bag/i).should('be.visible');
    cy.contains('The item has been added to your bag').should('exist');
  });

  it.skip('searches Google for "Lacoste US" and checks for the official result', () => {
    cy.visit('https://www.google.com/search?q=Lacoste+US');
    cy.contains('a', /lacoste/i).should('be.visible');
  });
});