
describe('Team Builder App Test', () => {
    it('can navigate to http://localhost:3000//', () => {
        cy.visit('http://localhost:3000//')
        cy.url().should('include', 'localhost')
    })

    it('can type a name in the name input', () => {
        cy.get('input[name="name"]')
          .type('Michael Scott')
          .should('have.value', 'Michael Scott')
    })

    it('can type an email in the email input', () => {
        cy.get('input[name="email"]')
        .type('michaelscott@aol.com')
        .should('have.value', 'michaelscott@aol.com')
    })

    it('can type a password in the password input', () => {
        cy.get('input[name="password"]')
          .type('dundermifflin')
          .should('have.value', 'dundermifflin')
    })

})