describe('Winner Test', () => {
    beforeEach(() => {
      cy.visit('127.0.0.1:8080');
      cy.get('#number').click();
      cy.get('#number').type('3');
      cy.get('#start').click();
  
    });
  
    it('Verify a winner is determined for having X across the middle row and assert the display message', () => {
      cy.get('td[data-row="1"][data-column="0"]').click();
      cy.get('td[data-row="0"][data-column="0"]').click();
      cy.get('td[data-row="1"][data-column="1"]').click();
      cy.get('td[data-row="0"][data-column="1"]').click();
      cy.get('td[data-row="1"][data-column="2"]').click();
      cy.get('td[data-row="1"][data-column="0"]').should('contain', 'X');
      cy.get('td[data-row="0"][data-column="0"]').should('contain', 'O');
      cy.get('td[data-row="1"][data-column="1"]').should('contain', 'X');
      cy.get('td[data-row="0"][data-column="1"]').should('contain', 'O');
      cy.get('td[data-row="1"][data-column="2"]').should('contain', 'X');
      cy.get('#endgame').should("contain.text", "Congratulations player X! You've won. Refresh to play again!");
  
      });

      it('Verify a winner is determined for having O across the top row and assert the display message', () => {
        cy.get('td[data-row="1"][data-column="0"]').click();
        cy.get('td[data-row="0"][data-column="0"]').click();
        cy.get('td[data-row="1"][data-column="1"]').click();
        cy.get('td[data-row="0"][data-column="1"]').click();
        cy.get('td[data-row="2"][data-column="0"]').click();
        cy.get('td[data-row="0"][data-column="2"]').click();
        cy.get('td[data-row="1"][data-column="0"]').should('contain', 'X');
        cy.get('td[data-row="0"][data-column="0"]').should('contain', 'O');
        cy.get('td[data-row="1"][data-column="1"]').should('contain', 'X');
        cy.get('td[data-row="0"][data-column="1"]').should('contain', 'O');
        cy.get('td[data-row="2"][data-column="0"]').should('contain', 'X');
        cy.get('td[data-row="0"][data-column="2"]').should('contain', 'O');
        cy.get('#endgame').should("contain.text", "Congratulations player O! You've won. Refresh to play again!");
  
    });

});