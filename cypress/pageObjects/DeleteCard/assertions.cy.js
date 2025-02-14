class deleteCardAssertions{
    checkCardNameIsDeleted(){
        cy.findByTestId("card-name").should("be.empty")
        return this ; 
    }
}
export default deleteCardAssertions