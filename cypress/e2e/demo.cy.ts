it('should have the right text in the headline', () => {
  cy.visit('/');

  cy.get('.navbar-brand').contains('Soft UI Dashboard');
});
