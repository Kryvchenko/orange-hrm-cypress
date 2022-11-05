/// <reference types ='Cypress'/>
const LoginPage = require('../pageobjects/LoginPage');
const LeavePage = require('../pageobjects/LeavePage');
const constants = require('../../constants/constants')


describe('Orange HRM testing suite', () => {
  before(() => {
    LoginPage.open('https://opensource-demo.orangehrmlive.com/');
    
  });
  it('should login with valid credentials', () => {
    LoginPage.login(constants.USER_NAME, constants.USER_PWD);
    LoginPage.elements.bannerImg().should.exist;
  });
  it('should allow to fill up leave list form', () => {
    cy.wait(1000);
    LeavePage.leaveListForm();
  });
})