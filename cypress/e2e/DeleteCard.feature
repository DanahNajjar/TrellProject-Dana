@smokeTest
Feature: Delete Card in Trello Website 
Scenario: Validate That The User Can Delete Existing Card 
Given The user navigate to the board
When Click on existing card 
And Click on Archive button
And Click on Delete button
And Click on the word Delete button of Delete card pop-screen  
Then The card deleted successfully