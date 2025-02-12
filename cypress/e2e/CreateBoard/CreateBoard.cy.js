import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../pageObjects/CreateBoard/actions.cy";
import createBoardAssertions from "../../pageObjects/CreateBoard/assertions.cy";

//must define an object 
const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions();
const boardName="R3-board"
Given("The user login in to Trello Websit",()=>{
    cy.loginToTrello()
})

When("Click in create buttn in the Navbar",()=>{
    createBoardAction.clickOnNavbarCreateButton();
})

When("Choose create board option",()=>{
    createBoardAction.clickOnCreateBoardOption();
})

When("Type the name of the board",()=>{
    createBoardAction.typeInBoardInputField(boardName); 
})

When("Click on create button",()=>{
    createBoardAction.clickOnCreateButton();
})

Then("The board will created successfully",()=>{
    createBoardAssertion.checkBoardNameIsContain(boardName)
})