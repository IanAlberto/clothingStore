class commonElements{

    modalTitleH4(){
        return cy.get('.modal-title')
    }

    continueBtn(){
        return cy.get('[data-qa="continue-button"]')
    }
}

export default commonElements;