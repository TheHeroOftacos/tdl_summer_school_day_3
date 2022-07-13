import BasePage from '../pageObjects/basePage'

class Createaddres extends BasePage {
  static get url () {
    return '/#/asket';
  }
  static get Country(){
    return cy.get('[placeholder="Please provide a country."]')
  }
  static get name(){
    return cy.get('[placeholder="Please provide a name."]')
  }
  static get number(){
    return cy.get('[placeholder="Please provide a mobile number."]')
  }
  static get zip(){
    return cy.get('[placeholder="Please provide a ZIP code."]')
  }
  static get Adress(){
    return cy.get('[placeholder="Please provide an address."]')
  }
  static get city(){
    return cy.get('[placeholder="Please provide a city."]')
  }
  static get state(){
    return cy.get('[placeholder="Please provide a state."]')
  }
  static get continue(){
    return cy.get('[id="submitButton"]')
  }
  static get visible(){
    return cy.get('[class="mat-row cdk-row ng-star-inserted"]').last()
  }
  
}

export default Createaddres;
