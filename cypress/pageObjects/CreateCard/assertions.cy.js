class createCardAssertions{
    checkListIsContainCard(){
        cy.findByTestId("card-name").should("contain","My First Card")
        return this ; 
    }
}
export default createCardAssertions