Cypress.Commands.add('case5', (creditCardNumber,creditVCC) => {
    cy.CustomerLogin()
    cy.wait(5000)
    cy.get('.primary-menu__book > .button').click()
    cy.get(':nth-child(1) > .heading > .checkout-pets-and-services__add-edit-services-btn').click().wait(200)
    cy.get('.modal__backdrop > .container > .card > .form > .service-selector > :nth-child(1) > .checkbox-component__control').click()
    cy.get('.modal__backdrop > .container > .card > .form > .add-pet-form__actions > .button').click().wait(2000)

    cy.get(':nth-child(2) > .heading > .checkout-pets-and-services__add-edit-services-btn').click().wait(200)
    cy.get('.modal__backdrop > .container > .card > .form > .service-selector > :nth-child(2) > .checkbox-component__control').click()
    cy.get('.modal__backdrop > .container > .card > .form > .add-pet-form__actions > .button').click().wait(2000)

    cy.get(':nth-child(2) > .card > .heading > .checkout-pets-and-services__add-edit-services-btn').click().wait(200)
    cy.get('.modal__backdrop > .container > .card > .form > .service-selector > :nth-child(3) > .checkbox-component__control').click()
    cy.get('.modal__backdrop > .container > .card > .form > .add-pet-form__actions > .button').click().wait(2000)

    cy.contains('Prices').scrollIntoView().click().wait(5000)
    cy.contains('Book now').scrollIntoView().click()
    cy.wait(5000)
    //cy.get(':nth-child(1) > .heading > .future-appointments-form__day-checkbox-wrapper > .checkbox-component > .checkbox-component__control').click()
    cy.contains('Next').scrollIntoView().click()
    cy.wait(5000)
    cy.contains('Next').scrollIntoView().click()
    cy.wait(5000)
    // cy.get('.credit-card-form__card-number > .base-input__control > .base-input__input').click()
    // .wait(500).type(creditCardNumber).wait(2000)
    // cy.get(':nth-child(1) > .select-component__control > .multiselect > .multiselect__tags').click().wait(100)
    // cy.contains('01').click().wait(100)
    // cy.get(':nth-child(2) > .select-component__control > .multiselect > .multiselect__tags').wait(100)
    // cy.contains('2022').click(100)
    // cy.get('.credit-card-form__exp-info > .base-input > .base-input__control > .base-input__input').click()
    // .wait(500).type(creditVCC).wait(200)
    cy.contains('Place Order').click()
    cy.wait(7000)
    cy.get('.page-intro__content > p').should('be.visible')
})