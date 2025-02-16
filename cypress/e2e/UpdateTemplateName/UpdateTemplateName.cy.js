/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import updateTemplateNameActions from "../../pageObjects/UpdateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../pageObjects/UpdateTemplateName/assertions.cy";

const boardName = "R3-board";
const cardTemplateName = "My Card Template";
const newCardName = "My New Updated Card"; 
let boardUrl, boardId, idList, cardId;

const dataUtil = new dataUtils();
const updateTemplateNameAction = new updateTemplateNameActions();
const updateTemplateNameAssertion = new updateTemplateNameAssertions();

before(() => {
  dataUtil.createBoard(boardName).then((response) => {
    cy.log(response.body.url);
    boardUrl = response.body.url;
    boardId = response.body.id;
    dataUtil.getListsOnBoard(boardId).then((response) => {
      cy.log(response.body);
      idList = response.body[0].id; 
      cy.log(idList);
      dataUtil.createCardTemplate(idList, cardTemplateName).then((response) => {
        cy.log(response.body.id);
        cardId = response.body.id; 
      });
    });
  });
  cy.loginToTrello();
});

Given("The user navigates to the board", () => {
  updateTemplateNameAction.openBoard(boardUrl);
});

When("The user clicks on an existing card", () => {
  updateTemplateNameAction.clickOnExistingCard();
});

When("The user clicks on the card title", () => {
  updateTemplateNameAction.clickOnCardTitle();
});

When("The user types a new name for the card", () => {
  updateTemplateNameAction.newCardName(newCardName); 
});

Then("The card template name is updated successfully", () => {
  updateTemplateNameAssertion.cardTemplateNameUpdatedSuccessfully(newCardName); 
});

after(() => {
  cy.wait(3000);
  dataUtil.deleteBoard(boardId);
});
