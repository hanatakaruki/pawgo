Cypress.Commands.add('successRegisterNewCustomer', (Address, Breed, Petname,
    BirthYear, Gender, PetNotes, FirstName, LastName, Email,
    MobileNumber, Password, HearAboutPawgo, AddressDetail) => {
    cy.visit(Cypress.config('customerWeb'))
  	cy.get('input[name="addressSearch"]').type(Address)
    .wait(5000).type('{downarrow}').wait(2000).type('{enter}').wait(2000)
    cy.contains('Pets & Services').click().wait(7000)
    cy.get('.multiselect__placeholder').click().wait(1000)
    cy.contains(Breed).click()
    cy.get(':nth-child(4) > .checkbox-component__control').click()
    cy.contains('Prices').click()
    cy.get('.list-groomer-profile__name').then(function($elem) {
        cy.log($elem.text())
    })
    cy.contains('Book now').click()
    cy.wait(5000)
    //cy.get(':nth-child(1) > .heading > .future-appointments-form__day-checkbox-wrapper > .checkbox-component > .checkbox-component__control').click()
    cy.contains('Next').scrollIntoView().click()
    cy.wait(5000)
    cy.get('.base-input__input').type(Petname)
    cy.get('.multiselect__tags').click()
    cy.contains(BirthYear).click()
    cy.contains(Gender).click()
    cy.get('.textarea-input__input').type(PetNotes).wait(2000)
    cy.contains('Update Pet').click().wait(3000)
    cy.contains('Next').click().wait(3000)
    cy.wait(5000)
    cy.get(':nth-child(1) > .base-input__control > .base-input__input').type(FirstName)
    cy.get(':nth-child(2) > .base-input__control > .base-input__input').type(LastName)
    cy.get(':nth-child(3) > .base-input__control > .base-input__input').type(Email)
    cy.get('.phone-input > .base-input__control > .base-input__input').type(MobileNumber)
    cy.get('.password-input > .base-input__control > .base-input__input').type(Password)
    cy.get('.multiselect__tags').click()
    cy.contains(HearAboutPawgo).click()
    cy.get('.textarea-input__input').type(AddressDetail)
    cy.contains('Submit').click().wait(5000)
    cy.contains('Next').scrollIntoView().click().wait(5000)
    cy.get('.payment-form__pay-later > .radio-button__control').click()
    cy.contains('Place Order').click().wait(5000)
    cy.get('.cart-appointment-summary > :nth-child(2)').then(function($elem) {
        cy.log($elem.text())
   })
})