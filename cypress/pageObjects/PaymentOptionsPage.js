import BasePage from '../pageObjects/basePage'

class PaymentPage extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get pay(){
    return cy.get('[class="mat-radio-container"]')
  }
  static get continue(){
    return cy.get('[aria-label="Proceed to review"]')
  }

  
}

export default PaymentPage;
