import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
  static get email(){
    return cy.get('[id="email"]')
  }
  static get pass(){
    return cy.get('[id="password"]')
  }
  static get login(){
    return cy.get('[id="loginButton"]')
  }
  static get account(){
    return cy.get('[id="navbarAccount"]')
  }
  static get name(){
    return cy.get('[id="mat-menu-panel-0"]')
  }
}

export default LoginPage;
