class cardTemplateActions{
   openBoard(boardUrl){
      cy.visit(boardUrl) 
      return this;
   }

   clickOnExistingCard(){
      cy.wait(3000)
       cy.findByTestId("card-done-state").click()
    }

    makeaTemplateButton(){
       cy.findByTestId("card-back-make-template-button").click()
    }
}
export default cardTemplateActions
