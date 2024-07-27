describe('First Move Test', () => {
    beforeEach(() => {
        cy.visit('127.0.0.1:8080');
        cy.get('#number').click();
        cy.get('#number').type('3');
        cy.get('#start').click();

    });

    it('Verify player X makes the first move', () => {
        cy.get('td[data-row="0"][data-column="0"]').click();
        cy.get('td[data-row="0"][data-column="0"]').should('contain', 'X');

    });

});