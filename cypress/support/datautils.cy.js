import { APIKey , APIToken } from "../support/constants.cy";
//FOR REQUESTS GOALS 
class dataUtils{
    createBoard =(boardName)=>{
        return cy.request("POST" ,`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }

    deleteBoard =(boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)

    }

    createCard = (idList) =>{
        return cy.request("POST" , `https://api.trello.com/1/cards?${idList}=5abbe4b7ddc1b351ef961414&key=${APIKey}&token=${APIToken}`)
    }
   
}
export default dataUtils;
