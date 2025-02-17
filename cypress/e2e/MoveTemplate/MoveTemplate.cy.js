///reference types = "cypress" /›
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import moveTemplateToAnyListActions from "../../pageObjects/MoveTemplateToAnyList/actions.cy";
import moveTemplateToAnyListAssertions from "../../pageObjects/MoveTemplateToAnyList/assertions.cy";

const boardName = "R3-board";
const cardTemplateName = "My Card Template";
const newTemplatePosition = "Doing";
let boardUrl, boardId, idList, cardId;
const dataUtil = new dataUtils();
const moveTemplateToAnyListAction = new moveTemplateToAnyListActions();
const moveTemplateToAnyListAssertion = new moveTemplateToAnyListAssertions();

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
  moveTemplateToAnyListAction.openBoard(boardUrl);
});

When("The user clicks on an existing card", () => {
  moveTemplateToAnyListAction.clickOnExistingCard();
});

When("The user clicks on Move button", () => {
  moveTemplateToAnyListAction.clickOnMoveButton();
});

When("The user clicks on List and types Doing in the list input field", () => {
  moveTemplateToAnyListAction.typesDoingInListInputField();
});

When("The user clicks on Move button", () => {
  moveTemplateToAnyListAction.confirmMoveButton();
});

Then("The card template moves to Doing List successfully", () => {
  moveTemplateToAnyListAssertion.checkCardIsPresent(newTemplatePosition);
});

after(() => {
  cy.wait(3000);
  dataUtil.deleteBoard(boardId);
});
