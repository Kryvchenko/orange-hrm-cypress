class LoginPage {
   elements = {
    userName: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    userPassword: () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    submitBtn: () => cy.get('.oxd-button'),
    bannerImg: () => cy.get('.oxd-brand-banner > img'),
    warning: () => cy.get('.oxd-alert-content > .oxd-text')

   }

   login(username, password) {
     this.elements.userName().type(username);
     this.elements.userPassword().type(password);
     this.elements.submitBtn().click();
   }
   
}

module.exports = new LoginPage();