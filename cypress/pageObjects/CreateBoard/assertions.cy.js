//class name 
class createBoardAssertions{
    checkBoardNameIsContain(boardName){
        cy.findByTestId("board-name-input").should("have.value",boardName)
    }
    }
    export default createBoardAssertions

