/**
 * @fileoverview Step definitions for Pet Store API testing, covering Create, Read, Update, and Delete operations.
 * @module petstore.steps
 * @date 2024-12-21
 * @author Sushil
 */

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { createPet, getPetById, updatePet,deletePet } from '../utils/apiUtils';
import { newPetData, updatedPetData } from '../data/petData';

let petId: number;
let petResponse: any;

Given('I add a new pet to the store', async function () {
  // Create Pet Data to create new pet
  const pet = {
    id: Math.floor(Math.random() * 10000),  // Random pet ID
    name: newPetData.name,
    status: newPetData.status
  };

  // Create a new pet using POST request in API utility function
  const response = await createPet(pet);
  petId = response.data.id;
  console.log(`Create new pet: POST request with ${petId} returned status: ${response.status}`);
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
});

// Get pet details using GET request in API utility function
When('I get the pet details by id', async function () {
  const response = await getPetById(petId);
  console.log(`GET request by id:${petId}, returned status: ${response.status}`);
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
  petResponse = response.data;
});

// Validate the record created with POST matches with GET response
Then('the pet details should be returned successfully', function () {
  console.log(`Received pet details: ${petId} ${petResponse.name} ${petResponse.status}`);
  expect(petResponse).to.not.be.null;
  expect(petResponse.id).to.equal(petId);
  expect(petResponse.name).to.equal(newPetData.name);
  expect(petResponse.status).to.equal(newPetData.status);
});

// Update the pet details using updated data utility
When('I update the pet details in the store', async function () {
  // Update pet data
  const updatedPet = { id: petId, name: updatedPetData.name, status: updatedPetData.status };
  const response = await updatePet(petId, updatedPet);
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
  petResponse = response.data;
});

// Validate the updated pet details
Then('the pet details should be updated successfully', function () {
  console.log(`Updated pet details: ${petId} ${petResponse.name} ${petResponse.status}`);
  expect(petResponse).to.not.be.null;
  expect(petResponse.id).to.equal(petId);
  expect(petResponse.name).to.equal(updatedPetData.name);
  expect(petResponse.status).to.equal(updatedPetData.status);
});

// Delete the pet using its ID
When('I delete the pet by ID', async function () {
  const response = await deletePet(petId);
  console.log(`DELETE request by id:${petId}, returned status: ${response.status}`);
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
  petResponse = response.data;
});

// Assert that the response for deletion was successful
Then('the pet should be successfully deleted', function () {
  expect(petResponse).to.have.property('message', String(petId));
});

// Verify that the pet does not exist
Then('the pet should no longer be accessed by ID', async function () {
  let getResponse:any;
  try {
    getResponse = await getPetById(petId);
  } catch (error: any) {
    getResponse = error.response;
  }
  console.log(`GET request for deleted PET ID:${petId}, returned status: ${getResponse.status}`);
  expect(getResponse.status).to.equal(404); // 404 Not Found
});