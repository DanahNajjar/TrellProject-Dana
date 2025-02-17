class moveTemplateToAnyListActions {
  openBoard(boardUrl) {
     cy.visit(boardUrl);
     return this;
  }

  clickOnExistingCard() {
    cy.wait(3000)
    cy.findByTestId("card-name").click();
  }

  clickOnMoveButton() {
    cy.findByTestId("card-back-move-card-button").click();
  }

  typesDoingInListInputField(newTemplatePosition) {
    cy.wait(3000);
    cy.findByTestId("move-card-popover-select-list-destination").click().type(newTemplatePosition +'{downArrow}'+'{enter}');
    cy.wait(3000);
}

  confirmMoveButton() {
    cy.findByTestId("move-card-popover-move-button").click();
  }
}

export default moveTemplateToAnyListActions;