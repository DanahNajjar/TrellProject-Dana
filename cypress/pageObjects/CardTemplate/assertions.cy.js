class cardTemplateAssertions {
    cardTemplateSuccessfullyCreated(){
         cy.findByTestId("template-card-back-banner").should("contain","This is a Template card.")
          return this ; 
    }
}
export default cardTemplateAssertions;
