class homePage{

    body(){
        return cy.get('body')
    }

    productDiv(){ 
        return cy.xpath('//div[@class="product-image-wrapper"]/div/div[./p[text()="Green Side Placket Detail T-Shirt"]]')
    }

    viewProductA(productName){
        return cy.xpath('//div[@class="product-image-wrapper" and ./div/div[./p[text()="'+productName+'"]]]/div[2]/ul/li/a')
    }

    cartA(){
        return cy.get('.shop-menu > .nav > :nth-child(3) > a')
    }

    logoutA(){
        return cy.get('.shop-menu > .nav > :nth-child(4)')
    }

    signUpOrSignInA(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
    }

    contactUsA(){
        return cy.get(':nth-child(9) > a')
    }

    deleteAccountA(){
        return cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }
}

export default homePage;