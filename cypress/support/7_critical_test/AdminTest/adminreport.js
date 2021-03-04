Cypress.Commands.add('adminreport', (TodayDate) => {
    cy.contains('Reports').click()
    switch (TodayDate) {
        case '01':
            TodayDate = "1";
          break;
        case '02':
            TodayDate = "2";
          break;
        case '03':
            TodayDate = "3";
          break;
        case '04':
            TodayDate = "4";
          break;
        case '05':
            TodayDate = "5";
          break;
        case '06':
            TodayDate = "6";
          break;
        case '07':
            TodayDate = "7";
        case '08':
            TodayDate = "8";
            break;
        case '09':
            TodayDate = "9";
            break;
      }
    //Active Groomers By Service Area
    cy.contains('Active Groomers By Service Area').click()
    cy.get('button').contains('Run Report').click().wait(3000)
    cy.get('#printContent > p').should('have.text','No results found with that criteria.')
    cy.get('.btn-sm').click()
    //Activity Report
    cy.contains('Activity Report').click()
    cy.get(':nth-child(1) > .bg-white').click()
    cy.get('.open > .flatpickr-months > .flatpickr-prev-month > svg').click()
    // cy.contains(TodayDate).click({force: true})
    // cy.get('button').contains('Run Report').click().wait(3000)
    // cy.get('#printContent').should('be.visible')
    cy.get('.btn-sm').click()
    //Order Activity Detailed View
    cy.contains('Order Activity Detailed View').click()
    cy.get(':nth-child(1) > .bg-white').click()
    cy.get('.open > .flatpickr-months > .flatpickr-prev-month > svg').click()
    // cy.contains(TodayDate).click({force: true})
    // cy.get('button').contains('Run Report').click().wait(3000)
    // cy.get('#printContent').should('be.visible')
    cy.get('.btn-sm').click()
})