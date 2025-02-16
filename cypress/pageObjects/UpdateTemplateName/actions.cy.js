class updateTemplateNameActions {
    openBoard(boardUrl) {
      cy.visit(boardUrl);
      return this;
    }
  
    clickOnExistingCard() {
      cy.findByTestId("card-done-state").click(); // Ensure the correct selector is used
    }
  
    clickOnCardTitle() {
      cy.findByTestId("card-back-title-input").click(); // Ensure the correct selector is used
    }
  
    newCardName(cardName) {
      cy.findByTestId("card-back-title-input").clear().type(cardName); // Use the passed card name variable
    }
  
  }
  
  export default updateTemplateNameActions;
  