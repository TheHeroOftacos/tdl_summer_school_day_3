import BasePage from '../pageObjects/basePage'

class Basket extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get checkoutbutton(){
    return cy.get('[id="checkoutButton"]')
  }

  
}

export default Basket;
