Cypress.Commands.add('adminmessages', (Name, Adress, State, phoneNumber, Email, Message) => {
    cy.contains('Messages').click()
    cy.get('#search-customers').type(Name).wait(200).type('{enter}')
    cy.get('#search-results-container > .customer-card').click().wait(4000)
    cy.get('.customer-info__name').should('have.text', Name)
    cy.get('.d-block > a').should('have.text', Adress)
    cy.get(':nth-child(2) > .d-block').should('have.text', State)
    cy.get('[href="tel:4802134768"]').should('have.text', phoneNumber)
    cy.get('[href="mailto:hmwilliams@mpsaz.org"]').should('have.text', Email)
    cy.xpath('//span[contains(.,"Ellie: ChihuahuaBella: MalteseSophie: Yorkshire TerrierSophie: Yorkshire TerrierBella: MalteseBella: MaltesePhoebe: Schnauzer (min)Leila: Chihuahua")]').should('be.visible') 
    cy.get('#message').type(Message).wait(100).type('{enter}')
    cy.contains(Message).should('be.visible') 

})