import BasePage from '../pageObjects/basePage'

class Summary extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get continue(){
    return cy.get('[id="checkoutButton"]')
  }

  
}

export default Summary;
