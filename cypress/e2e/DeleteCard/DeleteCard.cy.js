///reference types = "cypress" /›
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import deleteCardActions from "../../pageObjects/DeleteCard/actions.cy";
import deleteCardAssertions from "../../pageObjects/DeleteCard/assertions.cy";

const boardName = "R3-board";
let boardUrl , boardId 
const dataUtil = new dataUtils();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();
const idList="abbe4b7ddc1b351ef961414"

before(()=>{
    cy.loginToTrello()
    dataUtil.createBoard(boardName)
    .then((response)=>{
        cy.log(response.body.url)
        boardUrl=response.body.url
        boardId=response.body.id
    })
})

Given("The user navigate to the board",()=>{
    deleteCardAction.openBoard(boardUrl)

})

before(()=>{
    dataUtil.createCard(idList)
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
    deleteCardAssertion.checkCardNameIsDeleted()
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})