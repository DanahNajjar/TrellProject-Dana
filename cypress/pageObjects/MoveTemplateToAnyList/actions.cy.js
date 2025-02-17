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

  typesDoingInListInputField() {
    cy.wait(3000);
    cy.get("react-select-3-input").clear().type("Doing").type('{enter}');

}

  confirmMoveButton() {
    cy.findByTestId("move-card-popover-move-button").click();
  }
}

export default moveTemplateToAnyListActions;
