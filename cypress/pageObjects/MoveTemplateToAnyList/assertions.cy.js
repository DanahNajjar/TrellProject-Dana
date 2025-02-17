class moveTemplateToAnyListAssertions {
  checkCardIsPresent(newTemplatePosition) {
    cy.get(".FBCO2s6thAjoEx").first().wait(1000).should("contain.text", newTemplatePosition);
    return this;
  }
}

export default moveTemplateToAnyListAssertions;
