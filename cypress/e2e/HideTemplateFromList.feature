@regressionTest
Feature: Hide Card Template From The List
Scenario: Validate That The User Can Hide Card Template From The List
Given The user navigates to the board
When The user clicks on an existing card
And The user clicks on Hide from list button
Then The card template hidden successfully