describe('Cypress Test Cy', () => {
    beforeEach(() => {
        cy.visit('http://google.com/');
    })
    it('should be able to search for a word', () => {
        cy.get('input[name="q"]').type('Cypress');
        cy.get('input[name="q"]').type('{enter}');
    })

    it('should ', () => {
        console.log('Cypress Test Cy');
    });

    it('should be able to search for a word', () => {})
    it('should be able to search for a word', () => {
        cy.get('input[name="q"]').type('Cypress');
        cy.get('input[name="q"]').type('{enter}');
    })
})