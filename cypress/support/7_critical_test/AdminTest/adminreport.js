Cypress.Commands.add('adminreport', (TodayDate) => {
    cy.contains('Reports').click()
    //Active Groomers By Service Area
    cy.contains('Active Groomers By Service Area').click()
    cy.get('button').contains('Run Report').click().wait(3000)
    cy.get('#printContent > p').should('have.text','No results found with that criteria.')
    cy.get('.btn-sm').click()
    //Activity Report
    cy.contains('Activity Report').click()
    cy.get(':nth-child(1) > .bg-white').click()
    cy.get('.open > .flatpickr-months > .flatpickr-prev-month > svg').click()
    cy.contains(TodayDate).click()
    cy.get('button').contains('Run Report').click().wait(3000)
    cy.get('#printContent').should('be.visible')
    cy.get('.btn-sm').click()
    //Order Activity Detailed View
    cy.contains('Order Activity Detailed View').click()
    cy.get(':nth-child(1) > .bg-white').click()
    cy.get('.open > .flatpickr-months > .flatpickr-prev-month > svg').click()
    cy.contains(TodayDate).click()
    cy.get('button').contains('Run Report').click().wait(3000)
    cy.get('#printContent').should('be.visible')
    cy.get('.btn-sm').click()
})