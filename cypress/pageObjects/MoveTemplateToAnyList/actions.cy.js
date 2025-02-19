class moveTemplateToAnyListActions {
  openBoard(boardUrl) {
     cy.visit(boardUrl);
     return this;
  }

  clickOnExistingCard() {
    cy.wait(6000)
    cy.findByTestId("card-name").rightclick();
    return this;
  }

  clickOnMoveButton() {
    cy.findByTestId("quick-card-editor-move").click();
    return this;
  }

  typesDoingInListInputField(newTemplatePosition) {
    cy.wait(3000);
    cy.findByTestId("move-card-popover-select-list-destination").click().type(newTemplatePosition +'{enter}');
    cy.wait(3000);
    return this;
}

  confirmMoveButton() {
    cy.findByTestId("move-card-popover-move-button").dbclick();
    return this;
  }
}

export default moveTemplateToAnyListActions;