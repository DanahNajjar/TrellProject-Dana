///reference types = "cypress" /›
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import HideTemplateFromListActions from "../../pageObjects/HideTemplateFrom List/actions.cy";
import HideTemplateFromListAssertions from "../../pageObjects/HideTemplateFrom List/assertions.cy";



const boardName = "R3-board";
const cardTemplateName = "My Card Template";
let boardUrl, boardId, idList, cardId;
const dataUtil = new dataUtils();
const HideTemplateFromListAction = new HideTemplateFromListActions();
const HideTemplateFromListAssertion = new HideTemplateFromListAssertions();

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
    HideTemplateFromListAction.openBoard(boardUrl);
});

When("The user clicks on an existing card", () => {
    HideTemplateFromListAction.clickOnExistingCard();
});

When("The user clicks on Hide from list button", () => {
    HideTemplateFromListAction.clickOnHideFromListButton();
});

Then("The card template hidden successfully", () => {
  HideTemplateFromListAssertion.cardTemplateHiddenSuccessfully();
});

after(() => {
  cy.wait(3000);
  dataUtil.deleteBoard(boardId);
});
