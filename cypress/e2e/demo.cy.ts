import {levelSetup} from '@level-ci/a11y-cypress';

levelSetup({
 reportPath: './level-ci-reports'
});

it('should have the right text in the headline', () => {
  cy.visit('/');

  cy.get('.navbar-brand').contains('Soft UI Dashboard');
  
  cy.levelAnalyze({
  experimental: {
    stableSelectorAttributes: ['data-testid']
  }
})
});
