/**
 * @fileoverview Step definitions for Pet Store API testing, covering Create, Read, Update, and Delete operations.
 * @module petstore.steps
 * @date 2024-12-21
 * @author Sushil
 */

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { createPet, getPetById, updatePet, deletePet } from '../utils/apiUtils';
import { newPetData, updatedPetData, petwithID } from '../data/petData';
import { API_KEY } from '../config/apiConfig'; // Import the base URL

const headers = { Authorization: `Bearer ${API_KEY}` };
let petId: number;
let petResponse: any;

// Create a new pet using POST request in API utility function
Given('I add a new pet to the store', async function () {
  console.log(`\n\n----------------POST: CREATE PET WITH ID--------------------`);
  const response = await createPet(petwithID, { headers });
  console.log(`\t\tPET | ${response.data.id} | ${response.data.name} | ${response.data.status} | CREATED`);
  console.log(`\t\tRESPONSE:${response.status} ${response.statusText}`);
  petId = response.data.id;
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
});

// Get pet details using GET request in API utility function
When('I get the pet details by id', async function () {
  console.log(`----------------GET: GET PET WITH ID--------------------`);
  const response = await getPetById(petId, { headers });
  console.log(`\t\tRECEIVED PET | ${response.data.name} | ${response.data.status} |`);
  console.log(`\t\tRESPONSE:${response.status} ${response.statusText}`);
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
  petResponse = response.data;
});

// Validate the record created with POST matches with GET response
Then('the pet details should be returned successfully', function () {
  expect(petResponse).to.not.be.null;
  expect(petResponse.id).to.equal(petId);
  expect(petResponse.name).to.equal(newPetData.name);
  expect(petResponse.status).to.equal(newPetData.status);
  console.log(`----------CREATE PET WITH ID VALIDATION DONE-----------------`);
});

// Update the pet details using updated data utility
When('I update the pet details in the store', async function () {
  console.log(`------------PUT: UPDATE PET DETAILS--------------------`);
  const updatedPet = { id: petId, name: updatedPetData.name, status: updatedPetData.status };
  const response = await updatePet(updatedPet, { headers });

  console.log(`\t\tUPDATED PET | ${response.data.name} | ${response.data.status} |`);
  console.log(`\t\tRESPONSE:${response.status} ${response.statusText}`);
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
  petResponse = response.data;
});


// Validate the updated pet details
Then('the pet details should be updated successfully', function () {
  expect(petResponse).to.not.be.null;
  expect(petResponse.id).to.equal(petId);
  expect(petResponse.name).to.equal(updatedPetData.name);
  expect(petResponse.status).to.equal(updatedPetData.status);
  console.log(`----------UPDATE PET VALIDATION DONE-----------------`);
});

// Delete the pet using its ID
When('I delete the pet by ID', async function () {
  console.log(`------------DELETE REQUEST--------------------`);
  console.log(`DELETE PET DETAILS BY ID:${petId}`);
  const response = await deletePet(petId, { headers });
  console.log(`\t\tRESPONSE:${response.status} ${response.statusText}`);
  expect(response.status).to.equal(200);
  expect(response.statusText).to.equal("OK");
  petResponse = response.data;
});

// Assert that the response for deletion was successful
Then('the pet should be successfully deleted', function () {
  expect(petResponse).to.have.property('message', String(petId));
  console.log(`------------DELETE REQ ASSERTION DONE--------------------`);
});

// Verify that the pet does not exist
Then('the pet should no longer be accessed by ID', async function () {
  console.log(`------------GET REQUEST--------------------`);
  console.log(`-----------GET DELETED PET DETAILS BY ID:${petId}`);
  let getResponse: any;
  try {
    getResponse = await getPetById(petId, { headers });
  } catch (error: any) {
    getResponse = error.response;
  }
  console.log(`\t\tRESPONSE:${getResponse.status} ${getResponse.statusText}`);
  expect(getResponse.status).to.equal(404); // 404 Not Found
  console.log(`----------DELETE PET VALIDATION DONE-----------------`);
});

