/// <reference types ='Cypress'/>

class LeavePage  { 
    elements = {
        leavePage: () => cy.get(':nth-child(3) > .oxd-main-menu-item'),
        fromDate: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'),
        toDate: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'),
        leaveStatus: () => cy.get('.oxd-multiselect-wrapper > .oxd-select-text'),
        leaveType: () => cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'), 
        employeeNameInput: () => cy.get('.oxd-autocomplete-text-input > input')
    }
    
    leaveListForm() {
        this.elements.leavePage().click();
        const firstDate = this.elements.fromDate();
        firstDate.clear();
        firstDate.type('2020-01-11');
        cy.wait(2000);
        const secondDate = this.elements.toDate();
        secondDate.clear();
        secondDate.type('2021-01-11');
        cy.wait(2000);
        this.elements.leaveStatus().type('{downArrow}{downArrow}{enter}');  
        this.elements.leaveType().type('{downArrow}{downArrow}{downArrow}{enter}');
        this.elements.employeeNameInput().type('Jo');  
        cy.wait(2000);
        this.elements.employeeNameInput().type('{downArrow}{downArrow}{downArrow}{enter}');  
    }
 }
 
 module.exports = new LeavePage();