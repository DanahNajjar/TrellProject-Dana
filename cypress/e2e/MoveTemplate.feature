@regressionTest
Feature: Move Template To Any List
Scenario: Validate That The User Can Move Card Template To Any List
Given The user navigates to the board
When The user clicks on an existing card
And The user clicks on Move button
And The user clicks on List and types Doing in the list input field
And The user clicks on Move button
Then The card template moves to Doing List successfully
