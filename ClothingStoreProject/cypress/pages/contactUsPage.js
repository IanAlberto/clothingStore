class contactUsPage{

    
    nameIn(){
        return cy.get('[data-qa="name"]')
    }

    emailIn(){
        return cy.get('[data-qa="email"]')
    }
    
    subjectIn(){
        return cy.get('[data-qa="subject"]')
    }

    messageIn(){
        return cy.get('[data-qa="message"]')
    }

    submitBtn(){
        return cy.get('[data-qa="submit-button"]')
    }
    
    

}
export default contactUsPage;