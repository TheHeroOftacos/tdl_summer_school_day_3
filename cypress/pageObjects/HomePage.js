import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get searchbut(){
    return cy.get('[id="searchQuery"]')
  }
  static get search(){
    return cy.get('[id="mat-input-0"]')
  }
  static get lemonpopup(){
    return cy.get('[class="mat-tooltip-trigger product"]')
  }
  static get goodlemon(){
    return cy.get('[class="mat-dialog-content"]')
  }
  static get popupclose(){
    return cy.get('[class="mat-focus-indicator close-dialog buttons mat-stroked-button mat-button-base"]')
  }
  static get review(){
    return cy.get('[aria-label="Expand for Reviews"]')
  }
  static get mask(){
    return cy.get('[class="mat-tooltip-trigger review-text"]')
  }
  static get typereview(){
    return cy.get('[aria-label="Text field to review a product"]')
  }
  static get submit(){
    return cy.get('[id="submitButton"]')
  }
  static get grid(){
    return cy.get('[class="mat-grid-tile ng-star-inserted"]')
  }
  static get amountpopup(){
    // return cy.get('[aria-label="Items per page:"]')
    return cy.get('.mat-select-value')

  }
   static get option1(){
    return cy.get('[id="mat-option-1"]')
   }
  static get option2(){
    return cy.get('[id="mat-option-2"]')
  }
  static get addtobasket(){
    return cy.get('[aria-label="Add to Basket"]')
  }
  static get basket(){
    return cy.get('[aria-label="Show the shopping cart"]')
  }
  static get order(){
    return cy.get('[aria-label="Show Orders and Payment Menu"]')
  }
  static get saved(){
    return cy.get('[aria-label="Go to saved address page"]')
  }
  static get pay(){
    return cy.get('[aria-label="Go to saved payment methods page"]')
  }
}

export default HomePage;
