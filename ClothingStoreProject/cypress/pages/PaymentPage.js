class paymentPage{
    
    paymentH2(){
        return cy.xpath('//h2[text()="Payment"]')
    }

    nameOnCardIn(){
        return cy.get('[data-qa="name-on-card"]')
    }

    cardNumberIn(){
        return cy.get('[data-qa="card-number"]')
    }

    cvcIn(){
        return cy.get('[data-qa="cvc"]')
    }

    expireMonthIn(){
        return cy.get('[data-qa="expiry-month"]')
    }

    expireYearIn(){
        return cy.get('[data-qa="expiry-year"]')
    }
    
    payAndConfirmOrderBTN(){
        return cy.get('[data-qa="pay-button"]')
    }
    
}
export default paymentPage;