import '../../../support/7_critical_test/CustomerTest/case1'
import '../../../support/7_critical_test/CustomerTest/case2'
import '../../../support/7_critical_test/CustomerTest/case3'
import '../../../support/7_critical_test/CustomerTest/case4'
import '../../../support/7_critical_test/CustomerTest/case5'
import '../../../support/7_critical_test/CustomerTest/case6'

context('Functional test for customer', () => {

    var faker = require('faker');
    var creditCardNumber = faker.finance.creditCardNumber();
    var creditVCC = faker.finance.creditCardCVV();
      
    it('Customer can rebook one service for one pet with same groomer and pay with paylater', () => {
      cy.case1()
    })

    it('Customer can rebook two service for one pet with same groomer and pay with paylater', () => {
        cy.case2()
    })

    it('Customer can rebook one service for one pet with first available groomer and pay with paylater', ()=>{
      cy.case3()
    })

    it('Customer can rebook two service for one pet with first available groomer and pay with paylater', ()=>{
      cy.case4()
    })

    it('Customer can book service with multiple pet and multiple service and pay with credit car',() =>{
        cy.case5(creditCardNumber,creditVCC)
    })

    it('Customer can re-schedule service',()=>{
        cy.case6()
    })

})