class moveTemplateToAnyListAssertions {
  checkCardIsPresent(newTemplatePosition) {
    cy.contains("span", newTemplatePosition).wait(1000).should("be.visible");
    return this;
  }
}

export default moveTemplateToAnyListAssertions;
