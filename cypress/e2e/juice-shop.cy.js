import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";


describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    LoginPage.visit();
    // Click Login button
    LoginPage.email.type('demo')
    // Set email value to "demo"
    LoginPage.pass.type('demo')
    // Set password value to "demo"
    LoginPage.login.click()
    // Click Log in
    LoginPage.account.click();
    // Click Account button
    LoginPage.name.contains('span','demo')
    // Validate that "demo" account name appears in the menu section
  });

  it("Registration", () => { 
    RegistrationPage.visit()
      // fill-out form
    
      var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
      var string = '';
      for(var ii=0; ii<15; ii++){
          string += chars[Math.floor(Math.random() * chars.length)];
      }
      var string2 = '';
      for(var ii=0; ii<15; ii++){
          string2 += chars[Math.floor(Math.random() * chars.length)];
      }
    // Click "Not yet a customer?"
      RegistrationPage.emailfield.type(string + '@gmail.com')
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    RegistrationPage.passfield.type(string2)
    // Fill in password field and repeat password field with same password
    RegistrationPage.repeat.type(string2)
    // Click on Security Question menu
    RegistrationPage.security.click()
    // Select  "Name of your favorite pet?"
    RegistrationPage.pet.click()
    // Fill in answer
    RegistrationPage.typename.type('cat')
    // Click Register button
    RegistrationPage.button.click()
    // Set email value to previously created email
    LoginPage.email.type(string + '@gmail.com')
    // Set email value to "demo"
    LoginPage.pass.type(string2)
    // Set password value to "demo"
    LoginPage.login.click()
    // Set password value to previously used password value
    // Click login button
    // Click Account button
    LoginPage.account.click();
    // Click Account button
    LoginPage.name.contains('span',string + '@gmail.com')
    // Validate that account name (with previously created email address) appears in the menu section

    
  });
  });

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    HomePage.searchbut.click()
    // Search for Lemon
    HomePage.search.type('Lemon').type('{enter}')
    // Select a product card - Lemon Juice (500ml)
    HomePage.lemonpopup.click()
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.goodlemon.should('contain','Sour but full of vitamins.');
  });
  it("Search 500ml and validate Lemon, while having multiple cards", () => {
    HomePage.searchbut.click()
    HomePage.search.type('500ml').type('{enter}')
    HomePage.lemonpopup.eq(1).click()
    HomePage.goodlemon.should('contain','Sour but full of vitamins.');
  });
  
  // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  // Click on search icon
  // Search for 500ml
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."

  it("Search 500ml and validate cards", () => {
    HomePage.searchbut.click()
    HomePage.search.type('500ml').type('{enter}')
    HomePage.lemonpopup.eq(0).click()
    HomePage.goodlemon.should('contain','Now with even more exotic flavour.');
    HomePage.popupclose.click()
    HomePage.lemonpopup.eq(1).click()
    HomePage.goodlemon.should('contain','Sour but full of vitamins.');
    HomePage.popupclose.click()
    HomePage.lemonpopup.eq(2).click()
    HomePage.goodlemon.should('contain','Sweet & tasty!');
  });
  // Create scenario - Search 500ml and validate cards
  // Click on search icon
  // Search for 500ml
  // Select a product card - Eggfruit Juice (500ml)
  // Validate that the card (should) contains "Now with even more exotic flavour."
  // Close the card
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
  // Close the card
  // Select a product card - Strawberry Juice (500ml)
  // Validate that the card (should) contains "Sweet & tasty!"
  it("Read a review", () => {
    HomePage.searchbut.click()
    HomePage.search.type('King').type('{enter}')
    HomePage.lemonpopup.eq(0).click()
    HomePage.review.click().click().click()
    HomePage.mask.should('contain','K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    
  });
  // Create scenario - Read a review
  // Click on search icon
  // Search for King
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
  it("add review", () => {
    HomePage.searchbut.click()
    HomePage.search.type('Raspberry').type('{enter}')
    HomePage.lemonpopup.eq(0).click()
    HomePage.typereview.click().type('Tastes like metal')
    HomePage.submit.click()
    HomePage.review.click().click().click()
    HomePage.mask.should('contain','Tastes like metal');
  });
  // Create scenario - Add a review
  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"
  it.only("Validate product card amount", () => {
    HomePage.grid.should('have.length', 12)
    HomePage.amountpopup.scrollIntoView().click()
    HomePage.amountpopup.eq(1).click()
    HomePage.grid.should('have.length', 24)
    HomePage.amountpopup.click()
    HomePage.amountpopup.eq(2).click()
    HomePage.grid.should('have.length', 36)
  });
  // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35

  // Create scenario - Buy Girlie T-shirt
  // Click on search icon
  // Search for Girlie
  // Add to basket "Girlie"
  // Click on "Your Basket" button
  // Create page object - BasketPage
  // Click on "Checkout" button
  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
  // Click Continue button
  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
  // Click Continue button
  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
  // Click Continue button
  // Create page object - OrderSummaryPage
  // Click on "Place your order and pay"
  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!"

  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses
  // Create page object - SavedAddressesPage
  // Click on Add New Address
  // Create page object - CreateAddressPage
  // Fill in the necessary information
  // Click Submit button
  // Validate that previously added address is visible

  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  // Fill in Name
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list

});
