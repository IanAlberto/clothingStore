class addressPage{

    addressDetailsH2(){
        return cy.get(':nth-child(2) > .heading')
    }

    commentTextArea(){
        return cy.get('.form-control')
    }

    placeOrderBtn(){
        return cy.get(':nth-child(7) > .btn')
    }

    registerLoginU(){
        return cy.get('.modal-body > :nth-child(2) > a > u')
    }

    

}

export default addressPage;