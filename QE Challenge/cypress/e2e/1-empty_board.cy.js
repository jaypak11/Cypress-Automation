describe('Clean Board Test', () => {
  beforeEach(() => {
    cy.visit('127.0.0.1:8080');
    cy.get('#number').click();
    cy.get('#number').type('3');
    cy.get('#start').click();

  });

  it('Verify game initiates with an empty board', () => {
    cy.get('td').each(($el, index, $list) => {
      cy.wrap($el).should('be.empty');

    })

  });

  it('Verify generated game board is 3x3', () => {
    cy.get('table tr').should('have.length', 3);
    cy.get('table tr').each(($row) => {
      cy.wrap($row).find('td').should('have.length', 3);

    });

  });

});


