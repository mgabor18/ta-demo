Feature: Angular TA demo
  As an Auto QA
  I want to check the Angular page
  So that I can show a nice demo, how automation basics work

  Scenario: The user should have access to the Angular main page
  Given the user opens the Angular page
  Then the URL should be correct
  And the page's title should be "Angular"

  Scenario: The Angular page loads properly
  Given the user opens the Angular page
  Then the page's title should be "Angular"
  And the "The web development framework for building the future" is visible
  And the "The web development framework for building the future" text is correct

  Scenario: The user is able to open the Docs page
  Given the user opens the Angular page
  When the user clicks the Docs button in the header
  Then the Docs page should be opened
  And the introduction text should be visible