class updateTemplateNameActions {
  openBoard(boardUrl) {
    cy.visit(boardUrl);
    return this;
  }

  clickOnExistingCard() {
    cy.wait(3000)
    cy.findByTestId("card-done-state").click();
  }

  clickOnCardTitle() {
    cy.findByTestId("card-back-title-input").click(); 
  }

  newCardName(cardName) {
    cy.findByTestId("card-back-title-input").clear().type(cardName); 
  }

}

export default updateTemplateNameActions;
