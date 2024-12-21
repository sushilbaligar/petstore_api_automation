
Feature: Add Invalid Pet Details
  Validating error responses for invalid pet addition and update operations.

  Scenario: Add Invalid Pet Details and verify
    Given I add a new pet to the store with invalid query details
    Then I get the add new pet error response properly
    When I send invalid update pet query details
    Then I get the update error response properly
