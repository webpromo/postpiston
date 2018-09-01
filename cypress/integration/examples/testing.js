
describe('can test the site', () => {
    it('can visit the site', () => {
      cy.visit('http://localhost:3000');
    });
   
    it('.click() - click on a DOM element', () => {
        // https://on.cypress.io/click
        cy.get('#login').click()
   })
})