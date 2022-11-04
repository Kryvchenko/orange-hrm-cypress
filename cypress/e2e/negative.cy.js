/// <reference types ='Cypress'/>
const LoginPage = require('../pageobjects/LoginPage');

describe('Should reproduce negative scenarios', () => {
    before(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
      });
      it('should try to login with invalid credentials', () => {
        LoginPage.login('User', 'admin123');
        LoginPage.elements.warning().should('have.text', 'Invalid credentials');
      });
});