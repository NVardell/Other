Feature: Testing a REST API
  User should directed to homepage.

  Scenario: User makes GET request to /home
    When the user requests /home
    Then the user receives status code of 200
    And the user sees the Home message