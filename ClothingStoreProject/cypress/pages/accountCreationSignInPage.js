class accountCreationSignInPage{

    newUserSignupH2(){
        return cy.get('.signup-form > h2')
    }

    // Login side
    loginEmailIn(){
        return cy.get('[data-qa="login-email"]')
    }

    loginPasswordIn(){
        return cy.get('[data-qa="login-password"]')
    }

    loginButton(){
        return cy.get('[data-qa="login-button"]')
    }

    incorrectCredentialMessage(){
        return cy.get('.login-form > form > p')
    }
    
    // Sign up side
    signUpNameIn(){
        return cy.get('[data-qa="signup-name"]')
    }

    signUpEmailIn(){
        return cy.get('[data-qa="signup-email"]')
    }

    signInButton(){
        return cy.get('[data-qa="signup-button"]')
    }

    errorMessageSpan(){
        return cy.get('.signup-form > form > p')
    }

    MrCheckbox(){
        return cy.get('#id_gender1')
    }
    
    passwordIn(){
        return cy.get('[data-qa="password"]')
    }

    daySelect(){
        return cy.get('[data-qa="days"]')
    }

    monthSelect(){
        return cy.get('[data-qa="months"]')
    }

    yearSelect(){
        return cy.get('[data-qa="years"]')
    }

    addressIn(){
        return cy.get('[data-qa="address"]')
    }
   
    firstNameIn(){
        return cy.get('[data-qa="first_name"]')
    }

    lastNameIn(){
        return cy.get('[data-qa="last_name"]')
    }

    countryIn(){
        return cy.get('[data-qa="country"]')
    }

    stateIn(){
        return cy.get('[data-qa="state"]')
    }
    
    cityIn(){
        return cy.get('[data-qa="city"]')
    }

    zipCodeIn(){
        return cy.get('[data-qa="zipcode"]')
    }
    
    mobileNumberIn(){
        return cy.get('[data-qa="mobile_number"]')
    }

    createAccountBtn(){
        return cy.get('[data-qa="create-account"]')
    }
    
    continueBtn(){
        return cy.get('[data-qa="continue-button"]')
    }

    statusRegisterB(){
        return cy.get('b')
    }
}

export default accountCreationSignInPage;

