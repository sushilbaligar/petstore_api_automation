/**
 * @fileoverview Step definitions for testing invalid pet queries in the Pet Store API.
 * @author Sushil
 * @date 2024-12-21
 */

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import axios from 'axios';
export const PET_API_URL = 'https://petstore.swagger.io/v2/pet';

let payload = {
  "name": "<string>",
  "photoUrls": [
    "<string>",
    "<string>"
  ],
  "id": "<long>",
  "category": {
    "id": "<long>",
    "name": "<string>"
  },
  "tags": [
    {
      "id": "<long>",
      "name": "<string>"
    },
    {
      "id": "<long>",
      "name": "<string>"
    }
  ],
  "status": "pending"
}

let addPetErrorResponse: any;
let updatePetErrorResponse: any;

Given('I add a new pet to the store with invalid query details', async function () {
  console.log(`\n\n----------------POST REQUEST EMPTY PAYLOAD--------------------`);
  try {
    await axios.post("https://petstore.swagger.io/v2/pet/",payload);
  } catch (error: any) {
    addPetErrorResponse = error.response; // Capture the error response
  }
  console.log(`RESPONSE: ${addPetErrorResponse.status} ${addPetErrorResponse.statusText}`);
  // console.log(addPetErrorResponse);
});

Then('I get the add new pet error response properly', function () {
  // Assert the error response for adding an invalid pet
  expect(addPetErrorResponse).to.not.be.undefined;
  expect(addPetErrorResponse.status).to.equal(500);
  expect(addPetErrorResponse.statusText).to.equal("Server Error");
  console.log('----------EMPTY PAYLOAD VALIDATION DONE---------------------');
});

When('I send invalid update pet query details', async function () {
  const TempData = {
    id: 123456,
    name: "jonny",
    status: 'Available',
  };
  console.log(`\n\n----------------PUT REQUEST INVALID QUERY--------------------`);
  try {
    await axios.put("https://petstore.swagger.io/v2/pet/1111",TempData);
  } catch (error: any) {
    updatePetErrorResponse = error.response; // Capture the error response
  }
  console.log(`RESPONSE: ${updatePetErrorResponse.status} ${updatePetErrorResponse.statusText}`);
  // console.log(updatePetErrorResponse);
});


// Assert the error response for updating with invalid details
Then('I get the update error response properly', function () {
  expect(updatePetErrorResponse).to.not.be.undefined;
  expect(updatePetErrorResponse.status).to.equal(405);
  expect(updatePetErrorResponse.statusText).to.equal('Method Not Allowed');
  console.log('----------PUT REQUEST VALIDATION DONE---------------------');
});