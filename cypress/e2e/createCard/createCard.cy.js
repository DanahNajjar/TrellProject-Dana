///reference types = "cypress" /›
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import createCardActions from "../../pageObjects/createCard/actions.cy";
import createCardAssertions from "../../pageObjects/createCard/assertions.cy";


const boardName = "R3-board"
const cardName = "My First Card"
let boardUrl , boardId
const dataUtil = new dataUtils();
const createCardAction = new createCardActions();
const createCardAssertion = new createCardAssertions();

before(()=>{
    dataUtil.createBoard(boardName)
    .then((response)=>{
        cy.log(response.body.url)
        boardUrl=response.body.url
        boardId=response.body.id
    })
    cy.loginToTrello()
})
Given("The user navigate to the board",()=>{
    createCardAction.openBoard(boardUrl)
})

When("Click on Add a card button",()=>{
    createCardAction.clickOnAddACardButton()
})

When("Types card name in card title input field",()=>{
    createCardAction.typesCardName(cardName)
})

When("Click on Add card buttton",()=>{
    createCardAction.ClickonAddcardbuttton()
})

Then("The card will created successfully",()=>{
    createCardAssertion.checkListIsContainCard(cardName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})