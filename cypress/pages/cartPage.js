class cartPage{

    quantityBtn(){
        return cy.get('.disabled')
    }

    descriptionProductA(){
        return cy.get('h4 > a')
    }

    proceedToChechoutBtn(){
        return cy.get('.col-sm-6 > .btn')
    }

    registerLoginU(){
        return cy.get('.modal-body > :nth-child(2) > a > u')
    }


}

export default cartPage;