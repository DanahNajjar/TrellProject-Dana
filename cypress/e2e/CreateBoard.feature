@smokeTest
Feature: Create a Board in Trello Website
Scenario: Create a New Board 
Given The user login in to Trello Websit
When Click in create buttn in the Navbar
And Choose create board option
And Type the name of the board
And Click on create button
Then The board will created successfully