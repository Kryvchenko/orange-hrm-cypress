const helper = require('../../helpers/helper');

class LeavePage {
    elements = {
        leavePage: () => cy.get(':nth-child(3) > .oxd-main-menu-item'),
        fromDate: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'),
        toDate: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear(),
        leaveStatus: () => cy.get('.oxd-multiselect-wrapper > .oxd-select-text')
    }
    
    leaveListForm() {
        this.elements.leavePage().click();
        this.elements.fromDate().type('{selectall}{backspace}');
        this.elements.fromDate().type('2020-01-11');
        this.elements.toDate().type('2021-01-11');
        this.elements.leaveStatus().type('{downArrow}{downArrow}{enter}');  
    }
 }
 
 module.exports = new LeavePage();