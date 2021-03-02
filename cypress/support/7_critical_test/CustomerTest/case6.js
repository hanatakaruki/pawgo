Cypress.Commands.add('case6', () => {
    cy.CustomerLogin()
    cy.get('[title="Upcoming"]').click()
    cy.get('[style=""] > :nth-child(1) > :nth-child(1) > .customer-appointments__buttons > :nth-child(1)').click()
    cy.get('.card > .button--fill').click()
    var Number = Math.floor(Math.random() * 4) + 1
    for(let i = 0; i < Number; i++){
        cy.get(':nth-child(3) > .svg-icon').click()
        cy.wait(4000)
    }
    cy.contains('Submit').click()
    cy.wait(5000)
    cy.get('.card').should('be.visible')
})