
Feature: Pet Store API Tests
  Validating Create, Read, Update, and Delete operations for the Pet Store API.

  Scenario: Add a new pet to pet store and verify
    Given I add a new pet to the store
    When I get the pet details by id
    Then the pet details should be returned successfully

  Scenario: Update a pet's details in pet store and verify
    Given I add a new pet to the store
    When I update the pet details in the store
    Then the pet details should be updated successfully

  Scenario: Delete an existing pet by ID and verify
    Given I add a new pet to the store
    When I delete the pet by ID
    Then the pet should be successfully deleted
    And the pet should no longer be accessed by ID
