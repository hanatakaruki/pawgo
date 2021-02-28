import '../../../support/7_critical_test/AdminTest/adminmessages'
import '../../../support/7_critical_test/AdminTest/adminreport'

context('Functional test for admin', () => {
	
    var faker = require('faker');
    var Name = 'Heidi Williams';
    var Adress = '225 S Rita Ln, Chandler, Arizona 85226, United States';
    var State = 'Chandler/Sun Lakes';
    var phoneNumber = '480-213-4768';
    var Email = 'hmwilliams@mpsaz.org';
    var Message = 'Test'+' '+faker.lorem.sentence();
    var TodayDate = Cypress.moment().format('DD');

    beforeEach(() => {
      cy.AdminLogin()
    })
      
    it('Message test for admin was success running', () => {
      cy.adminmessages(Name, Adress, State, phoneNumber, Email, Message)
    })

    it('Report test for admin was success running', ()=>{
      cy.adminreport(TodayDate)
    })

})