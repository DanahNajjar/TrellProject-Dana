class HideTemplateFromListAssertions {
  cardTemplateHiddenSuccessfully() {
    cy.findByTestId("card-back-archive-banner").should("contain.text", "This card is archived.");
    return this;
  }
}

export default HideTemplateFromListAssertions;
