class createCardActions{
    openBoard(boardUrl){
       cy.visit(boardUrl) 
       return this;
    }
    clickOnAddACardButton(){
        cy.findByTestId("list-add-card-button").first().click()
        return this;
    }
    typesCardName(cardName){
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        cy.wait(2000)
        return this;
    }

    ClickonAddcardbuttton(){
        cy.findByTestId("list-card-composer-add-card-button").click()
        return this;
}
}
export default createCardActions
