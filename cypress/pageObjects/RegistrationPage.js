import BasePage from '../pageObjects/basePage'


class RegistrationPage extends BasePage {
  
  static get url () {
    return '/#/register';
  }
  static get elementName(){
    return cy.get('elementSelector');
  }
  static get emailfield(){
    return cy.get('[id="emailControl"]')
  }
  static get passfield(){
    return cy.get('[id="passwordControl"]')
  }
  static get repeat(){
    return cy.get('[id="repeatPasswordControl"]')
  }
  static get security(){
    return cy.get('[name="securityQuestion"]')
  }
  static get pet(){
    return cy.get('[id="mat-option-9"]').scrollIntoView()
  }
  static get typename(){
    return cy.get('[id="securityAnswerControl"]')
  }
  static get button(){
    return cy.get('[id="registerButton"]')
  }
  
}

export default RegistrationPage;
