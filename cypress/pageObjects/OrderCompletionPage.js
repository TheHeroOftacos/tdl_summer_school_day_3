import BasePage from '../pageObjects/basePage'

class End extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get validpurchase(){
    return cy.get('[class="confirmation"]')
  }
  
}

export default End;