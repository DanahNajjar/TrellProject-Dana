import { APIKey, APIToken } from "../support/constants.cy";

// FOR REQUESTS GOALS
class dataUtils {
  createBoard = (boardName) => {
    return cy.request("POST", `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`);
  }

  deleteBoard = (boardId) => {
    return cy.request("DELETE", `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);
  }

  getListsOnBoard = (boardId) => {
    return cy.request("GET", `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`);
  }

  createCard = (idList, cardName) => {
    return cy.request("POST", `https://api.trello.com/1/cards?idList=${idList}&name=${cardName}&key=${APIKey}&token=${APIToken}`);
  }

  createCardTemplate = (idList, cardName) => {
    return cy.request("POST", `https://api.trello.com/1/cards?idList=${idList}&name=${cardName}&key=${APIKey}&token=${APIToken}`);
  }
}

export default dataUtils;
