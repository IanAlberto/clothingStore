class productDetailsPage{

    quantityIn(){
        return cy.get('#quantity')
    }

    productTitleH2(){
        return cy.get('.product-information > h2')
    }

    addToCartBtn(){
        return cy.get(':nth-child(5) > .btn')
    }

    viewCartA(){
        return cy.get('u')
    }

     
}
export default productDetailsPage;