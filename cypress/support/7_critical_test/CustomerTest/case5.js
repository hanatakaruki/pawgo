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
    
    cy.get(':nth-child(1) > .list-groomer-profile > .list-groomer-profile__cta > .button').then($schedule => {
        if ($schedule.is(':visible')){
            cy.get(':nth-child(1) > .list-groomer-profile > .list-groomer-profile__cta > .button').click()
            var Number = Math.floor(Math.random() * 3) + 1
            for(let i = 0; i < Number; i++){
                cy.get(':nth-child(3) > .svg-icon').click()
                cy.wait(4000)
            }
            cy.contains('Next').click()
    }})


    cy.wait(5000)
    cy.contains('Next').scrollIntoView().click()
    cy.wait(5000)
    cy.contains('Next').scrollIntoView().click()
    cy.wait(5000)
    cy.get('.credit-card-form__card-number > .base-input__control > .base-input__input').click()
    .wait(500).type(creditCardNumber).wait(2000)
    var Month = Math.floor(Math.random() * 12) + 1
    cy.get('.credit-card-form__exp-info > :nth-child(1) > .base-input__control > .base-input__label').type(Month)
    cy.get(':nth-child(2) > .base-input__control > .base-input__label').type('2022')
    cy.get('.credit-card-form__exp-info > :nth-child(3) > .base-input__control > .base-input__input').type(creditVCC)
    cy.contains('Place Order').click()
    cy.wait(7000)
    cy.get('.page-intro__content > p').should('be.visible')
})