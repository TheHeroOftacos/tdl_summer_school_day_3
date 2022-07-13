import BasePage from '../pageObjects/basePage'

class AdressPage extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get Adress(){
    return cy.get('[id="mat-radio-40"]')
  }
  static get continue(){
    return cy.get('[aria-label="Proceed to payment selection"]')
  }

  
}

export default AdressPage;
