import '../../support/registration/customerregister'
import '../../support/registration/admincheckonwpadmin'
context('Register new customer on pawgo websites', () => {
	
    var faker = require('faker');
    var Address = '102 W HATCHER RD PHOENIX AZ 85021';
    var Breed = 'Affenpinscher';
    var Petname = faker.internet.userName();
    var BirthYear = '2021';
    var Gender = 'Male';
    var PetNotes = faker.lorem.paragraph();
    const FirstName = faker.name.firstName();
    const LastName = faker.name.lastName();
    var Email = faker.internet.exampleEmail();
    var MobileNumber =faker.phone.phoneNumber();
    var Password = faker.internet.password();
    var HearAboutPawgo = 'Google';
    var AddressDetail = faker.address.streetAddress();

      
    it('Success register new customer and booking service', () => {
      cy.successRegisterNewCustomer(Address, Breed, Petname,
        BirthYear, Gender, PetNotes, FirstName, LastName, Email, 
        MobileNumber, Password, HearAboutPawgo, AddressDetail)
    })

    it('Admin can search new user on wp-admin',()=>{
      cy.adminChecknewUseronWpAdmin(FirstName, LastName)
    })

})