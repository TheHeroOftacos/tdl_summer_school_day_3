import BasePage from '../pageObjects/basePage'

class DeliveryMethod extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get speed(){
    return cy.get('[class="mat-row cdk-row ng-star-inserted"]').eq(2)
  }
  static get continue(){
    return cy.get('[aria-label="Proceed to delivery method selection"]')
  }

  
}

export default DeliveryMethod;
