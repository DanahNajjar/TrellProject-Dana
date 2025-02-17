class deleteCardActions{
     openBoard(boardUrl){
        cy.visit(boardUrl) 
        return this;
     }
     clickOnExistingCard(){
      cy.wait(3000)
        cy.findByTestId("card-done-state").click()
     }
     
     clickOnArchiveButton(){
        cy.findByTestId("card-back-archive-button").click()
     }
     
     clickOnDeleteButton(){
        cy.findByTestId("card-back-delete-card-button").click()
    }
    
    clickOnDeleteCardPopScreen(){
        cy.findByTestId("popover-confirm-button").click()
}

}
export default deleteCardActions

