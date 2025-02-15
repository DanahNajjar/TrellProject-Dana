///reference types = "cypress" /›
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import deleteCardActions from "../../pageObjects/DeleteCard/actions.cy";
import deleteCardAssertions from "../../pageObjects/DeleteCard/assertions.cy";

const boardName = "R3-board";
const cardName = "My First Card"
let boardUrl , boardId ,idList; 
const dataUtil = new dataUtils();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();


before(() => {
    dataUtil.createBoard(boardName)
        .then((response) => {
            cy.log(response.body.url);
            boardUrl = response.body.url;
            boardId = response.body.id;

            dataUtil.getListsOnBoard(boardId)
                .then((response) => {
                    cy.log(response.body);
                    idList = response.body[0].id;  // Correct way to access the first list Id
                    cy.log(idList);

                    dataUtil.createCard(idList, "My First Card")
                        .then((response) => {
                            cy.log(response.body.id);  
                        });
                });
        });

    cy.loginToTrello();
});

Given("The user navigate to the board",()=>{
    deleteCardAction.openBoard(boardUrl)

})



When("Click on existing card",()=>{
    deleteCardAction.clickOnExistingCard()

})

When("Click on Archive button",()=>{
    deleteCardAction.clickOnArchiveButton()

})

When("Click on Delete button",()=>{
    deleteCardAction.clickOnDeleteButton()

})

When("Click on the word Delete button of Delete card pop-screen",()=>{
    deleteCardAction.clickOnDeleteCardPopScreen()
})

Then("The card deleted successfully",()=>{
    deleteCardAssertion.checkCardIsDeleted(cardName)
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})