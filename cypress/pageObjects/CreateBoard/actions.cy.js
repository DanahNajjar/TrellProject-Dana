//class name 
class createBoardActions{
    //methode name
    clickOnNavbarCreateButton(){
        cy.findByTestId("header-create-menu-button").click();
        return this;
        }

    clickOnCreateBoardOption(){
        cy.findByTestId("header-create-board-button").click();
        return this;
    }

    typeInBoardInputField(boardName){
        cy.findByTestId("create-board-title-input").type(boardName);
        cy.wait(5000)
        return this;
    }

    clickOnCreateButton(){
        cy.findByTestId("create-board-submit-button").click();
        return this;
    }
    }
    export default createBoardActions
