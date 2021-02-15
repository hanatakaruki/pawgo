Cypress.Commands.add('adminChecknewUseronWpAdmin', (FirstName, LastName) => {
    cy.AdminLogin()
    cy.contains('Customers').click().wait(2000)
    cy.get('input[id="search-groomer"]').type(FirstName+' '+LastName).type('{enter}')
    cy.get('.col-5 > a').should('have.text', FirstName+' '+LastName)
})