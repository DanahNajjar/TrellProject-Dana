@regressionTest
Feature: Update Name Of Card Template
Scenario: Validate That The User Can Update Name Of Card Template
Given The user navigates to the board
When The user clicks on an existing card
And The user clicks on the card title
And The user types a new name for the card
Then The card template name is updated successfully