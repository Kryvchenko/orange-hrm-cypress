/// <reference types ='Cypress'/>
const LoginPage = require('../pageobjects/LoginPage');
const LeavePage = require('../pageobjects/LeavePage');
const constants = require('../../constants/constants')


describe('Orange HRM testing suite', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    LoginPage.login(constants.USER_NAME, constants.USER_PWD);
  });
  it('should login with valid credentials', () => {
    LoginPage.elements.bannerImg().should.exist;
    
  });
  it('should allow to fill up leave list form', () => {
    LeavePage.leaveListForm();
  });
})