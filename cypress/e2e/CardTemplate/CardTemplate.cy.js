///reference types = "cypress" /›
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import cardTemplateActions from "../../pageObjects/CardTemplate/actions.cy";
import cardTemplateAssertions from "../../pageObjects/CardTemplate/assertions.cy";
import dataUtils from "../../support/dataUtils.cy";

const boardName = "R3-board";
const cardName = "My First Card"
let boardUrl , boardId ,idList  
const cardTemplateAction = new cardTemplateActions();
const cardTemplateAssertion = new cardTemplateAssertions();
const dataUtil = new dataUtils();

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
    cardTemplateAction.openBoard(boardUrl)

})
When("Click on existing card",()=>{
    cardTemplateAction.clickOnExistingCard()
})

When("Click on Make a template button",()=>{
    cardTemplateAction.makeaTemplateButton()
})

Then("The New Card Template created successfully",()=>{
    cardTemplateAssertion.cardTemplateSuccessfullyCreated()
})

after(()=>{
    cy.wait(3000)
    dataUtil.deleteBoard(boardId)
})