Cypress.Commands.add('adminChecknewUseronWpAdmin', (FirstName) => {
    cy.AdminLogin()
    cy.contains('Customers').click().wait(2000)
    cy.get('input[id="search-groomer"]').type(FirstName).type('{enter}')
    cy.contains(FirstName).should('be.visible')
    //cy.get('.col-5 > a').should('have.text', FullName)
})