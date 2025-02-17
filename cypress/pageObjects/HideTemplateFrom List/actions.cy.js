class HideTemplateFromListActions {
    openBoard(boardUrl) {
      cy.visit(boardUrl);
      return this;
    }
  
    clickOnExistingCard(){
      cy.wait(3000)
        cy.findByTestId("card-done-state").click()
     }

    clickOnHideFromListButton(){
      cy.findByTestId("card-back-archive-button").click(); 
    }
   
  }
  
  export default HideTemplateFromListActions;
  