/// <reference types="cypress" />
import "allure-cypress/commands";

import productDetailsPage from '../pages/productDetailsPage'
import homePage from '../pages/homePage'
import cartPage from '../pages/cartPage'
import commonElements from '../pages/commonElements'
import accountCreationSignInPage from '../pages/accountCreationSignInPage'
import contactUsPage from '../pages/contactUsPage'
import addressPage from '../pages/addressPage'
import paymentPage from '../pages/PaymentPage'

describe('User flow', () => {
  let userdata
  let productdata

  before(() => {
    // Define the data to use in the tcs 
    cy.fixture('UserData.json').then((jsonData) =>{
      userdata = jsonData['user_info']
    })
    cy.fixture('UserData.json').then((jsonData) =>{
      productdata = jsonData['product_info']
    })
    // Enter the website
     cy.visit('/')
  })

  it('Sign up the user', () => {
    const home_page = new homePage()
    const account_creation = new accountCreationSignInPage()
    
    // Click to the Signup / Login option on the header
    home_page.signUpOrSignInA().click()

    // Validate that the new User sign up title is visible in the screen
    account_creation.newUserSignupH2().should('be.visible')

    // Complete the form of sign in and click to the create account button 
    account_creation.signUpNameIn().type(userdata['name'])
    account_creation.signUpEmailIn().type(userdata['email'])
    account_creation.signInButton().click()
    account_creation.MrCheckbox().check()
    account_creation.passwordIn().type(userdata['password'])
    account_creation.daySelect().select(userdata['day'])
    account_creation.monthSelect().select(userdata['month'])
    account_creation.yearSelect().select(userdata['year'])
    account_creation.firstNameIn().type(userdata['firstName'])
    account_creation.lastNameIn().type(userdata['lastName'])
    account_creation.addressIn().type(userdata['address'])
    account_creation.countryIn().select(userdata['country'])
    account_creation.stateIn().type(userdata['state'])
    account_creation.cityIn().type(userdata['city'])
    account_creation.zipCodeIn().type(userdata['zipcode'])
    account_creation.mobileNumberIn().type(userdata['mobileNumber'])
    account_creation.createAccountBtn().click()

    // Validate that the status of the sign up is visible in the screen
    account_creation.statusRegisterB().should('have.text','Account Created!')

    // Click to the continue button
    account_creation.continueBtn().click()
    
  })

  it('Log in with an existing user', () => {
    const home_page = new homePage()
    const account_creation = new accountCreationSignInPage()

    // Click to the Signup / Login option on the header
    home_page.signUpOrSignInA().click()

    // Validate that the new User sign up title is visible in the screen
    account_creation.newUserSignupH2().should('be.visible')

    // Complete the form and click to the login button
    account_creation.loginEmailIn().type(userdata['email'])
    account_creation.loginPasswordIn().type(userdata['password'])
    account_creation.loginButton().click()
    cy.wait(2000)
  })

  it('Buy a product', () => {
    const home_page = new homePage()
    const product_details_page = new productDetailsPage()
    const cart_page = new cartPage()
    const common_elements = new commonElements()
    const address_page = new addressPage()
    const payment_page = new paymentPage()
    
    // Scroll down about halfway down the page.
    home_page.body().then($body => {
        const halfpage = $body[0].scrollHeight / 2;
        cy.scrollTo(0, halfpage);
    });

    // Choose a product and click on “View product” under the picture of the product.
    home_page.productDiv().trigger('mouseover')
    home_page.viewProductA(productdata['name']).click()

    // Validate that the title of the product is visible in the screen
    product_details_page.productTitleH2().should('be.visible')

    // In the Quantity box enter 30
    product_details_page.quantityIn().clear().type(productdata['amount'])

    // Click “Add to cart”
    product_details_page.addToCartBtn().click()

    // Validate that the title of the modal is visible in the screen
    common_elements.modalTitleH4().should('be.visible')

    // Click View cart”
    product_details_page.viewCartA().click()

    // Validate that the proceed to checkout is visible in the screen
    cart_page.proceedToChechoutBtn().should('be.visible')

    // Validate if the quantity is the same as the configured before
    cart_page.quantityBtn().should('have.text', '30')

    // Click proceed to checkout”
    cart_page.proceedToChechoutBtn().click()

    // Validate if the adress details is visible in the screen
    address_page.addressDetailsH2().should('be.visible')

    // Type a comment and click the place order button
    address_page.commentTextArea().type('this is a comment')
    address_page.placeOrderBtn().click()

    // Validate if the payment text is visible in the screen
    payment_page.paymentH2().should('be.visible')

    // Complete the form and click the "continue" button
    payment_page.nameOnCardIn().type(userdata['nameOnCard'])
    payment_page.cardNumberIn().type(userdata['cardNumber'])
    payment_page.cvcIn().type(userdata['cvc'])
    payment_page.expireMonthIn().type(userdata['expireMonth'])
    payment_page.expireYearIn().type(userdata['expireYear'])
    payment_page.payAndConfirmOrderBTN().click()
    common_elements.continueBtn().click()

    // Click the logout option
    home_page.logoutA()

  })

  it('Send the information to the contact us', () => {
    const home_page = new homePage()
    const contactus_page = new contactUsPage()
    const stub = cy.stub()
  
    // Click to the contact us on the header
    home_page.contactUsA().click()

    // Validate that the Name input is visible in the screen
    contactus_page.nameIn().should('be.visible')

    // Complete the form
    contactus_page.nameIn().type('ia')
    contactus_page.emailIn().type(userdata['email'])
    contactus_page.subjectIn().type('testing')
    contactus_page.messageIn().type('testing')
    
    // Click to the submit button and accept the alert
    contactus_page.submitBtn().click().then(()=>{
      cy.on('window:confirm', () => true);
    })
  })

  // Negative TCs
  it('Log in with an non existing user', () => {
    const home_page = new homePage()
    const account_creation = new accountCreationSignInPage()

    // Click to the Signup / Login option on the header
    home_page.signUpOrSignInA().click()

    // Validate that the new User sign up title is visible in the screen
    account_creation.newUserSignupH2().should('be.visible')

    // Complete the form and click to the login button
    account_creation.loginEmailIn().type('i@gmail.com')
    account_creation.loginPasswordIn().type('a')
    account_creation.loginButton().click()
    account_creation.incorrectCredentialMessage().should('be.visible')
  })

  
  it('Sign up with an existing user', () => {
    const home_page = new homePage()
    const account_creation = new accountCreationSignInPage()

    // Click to the Signup / Login option on the header
    home_page.signUpOrSignInA().click()

    // Validate that the new User sign up title is visible in the screen
    account_creation.newUserSignupH2().should('be.visible')

    // Complete the form of sign in 
    account_creation.signUpNameIn().type(userdata['name'])
    account_creation.signUpEmailIn().type(userdata['email'])
    account_creation.signInButton().click()
    account_creation.errorMessageSpan().should('be.visible')
  })



  // The next tc is not in the flow but will help me to reuse the same email. I reuse the elements and code, only for that reason.
  it('Delete the account', () => {
    const home_page = new homePage()
    const common_elements = new commonElements()
    const account_creation = new accountCreationSignInPage()

    // The user logs in 
    home_page.signUpOrSignInA().click()
    account_creation.newUserSignupH2().should('be.visible')

    account_creation.loginEmailIn().type(userdata['email'])
    account_creation.loginPasswordIn().type(userdata['password'])
    account_creation.loginButton().click()
    cy.wait(2000)

    // Click to the delete account on the header
    home_page.deleteAccountA().click()

    // Click to the continue button
    common_elements.continueBtn()

  })
})
  