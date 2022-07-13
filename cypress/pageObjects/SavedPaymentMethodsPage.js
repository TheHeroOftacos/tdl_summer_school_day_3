import BasePage from '../pageObjects/basePage'

class PayAdd extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get Add(){
    return cy.get('[id="mat-expansion-panel-header-0"]')
  }
  static get name(){
    return cy.get('[id="mat-input-1"]')
  }
  static get number(){
    return cy.get('[id="mat-input-2"]')
  }
  static get month(){
    return cy.get('[id="mat-input-3"]')
  }
  static get year(){
    return cy.get('[id="mat-input-4"]')
  }
  static get submit(){
    return cy.get('[id="submitButton"]')
  }
  static get cell(){
    return cy.get('[role="row"]').last()
  }
  
}

export default PayAdd;
