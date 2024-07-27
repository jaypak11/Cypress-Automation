describe('Persistence Test', () => {
    beforeEach(() => {
      cy.visit('127.0.0.1:8080');
      cy.get('#number').click();
      cy.get('#number').type('3');
      cy.get('#start').click();
  
    });
  
    it('Verify an X in the top left of the board cannot be overwritten', () => {
      cy.get('td[data-row="0"][data-column="0"]').click();
      cy.get('td[data-row="0"][data-column="0"]').click();
      cy.get('td[data-row="0"][data-column="0"]').should('contain', 'X');
      cy.get('td[data-row="0"][data-column="0"]').should('not.contain', 'O');
  
      });

    });