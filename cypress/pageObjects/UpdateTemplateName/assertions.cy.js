class updateTemplateNameAssertions {
  cardTemplateNameUpdatedSuccessfully(cardName) {
    cy.findByTestId("card-back-title-input").should("contain.text", cardName);
    return this;
  }
}

export default updateTemplateNameAssertions;

  