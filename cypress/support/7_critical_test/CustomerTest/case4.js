Cypress.Commands.add('case4', (creditCardNumber,creditVCC) => {
    cy.CustomerLogin()
    cy.get('[title="History"]').click()
    cy.get('.customer-appointments__buttons > .button--fill').first().click().wait(3000)
    cy.get('.card > .button--outline').click().wait(3000)
    cy.xpath('//div[@class="checkout-pets-and-services__add-edit-services-btn"]').first().click(3000)
    cy.get('.modal__backdrop > .container > .card > .form > .service-selector > :nth-child(3) > .checkbox-component__control').click()
    cy.get('.add-pet-form__actions > .button').scrollIntoView().click()
    cy.contains('Prices').scrollIntoView().click().wait(5000)
    
    cy.get('body').then($body => {
        if ($body.find('.customer-new-groomers__book-first-groomer').length > 0) {
            cy.contains('Book now').click()
        } else {
            var Number = Math.floor(Math.random() * 3) + 1
            for(let i = 0; i < Number; i++){
                cy.get(':nth-child(3) > .svg-icon').click()
                cy.wait(4000)
            }
            cy.contains('Next').click()
        }     
    })
    cy.wait(5000)
    //cy.get(':nth-child(1) > .heading > .future-appointments-form__day-checkbox-wrapper > .checkbox-component > .checkbox-component__control').click()
    cy.contains('Next').scrollIntoView().click()
    cy.wait(5000)
    cy.contains('Next').scrollIntoView().click()
    cy.wait(5000)
    cy.get('.payment-form__pay-later > .radio-button__control').click()
    cy.contains('Place Order').click()
    cy.wait(7000)
    cy.get('.page-intro__content > p').should('be.visible')
})