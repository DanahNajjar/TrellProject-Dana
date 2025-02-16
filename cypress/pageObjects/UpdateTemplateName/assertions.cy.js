class updateTemplateNameAssertions {
    cardTemplateNameUpdatedSuccessfully(cardName) {
      cy.findByTestId("list-card").should("contain.text", cardName); // Use the passed card name variable
      return this;
    }
  }
  
  export default updateTemplateNameAssertions;
  