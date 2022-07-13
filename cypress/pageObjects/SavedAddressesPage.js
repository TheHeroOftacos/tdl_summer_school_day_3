import BasePage from '../pageObjects/basePage'

class SaveAdressPage extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get addAdress(){
    return cy.get('[aria-label="Add a new address"]')
  }

  
}

export default SaveAdressPage;
