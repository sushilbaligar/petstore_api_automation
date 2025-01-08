/**
 * @fileoverview Step definitions for testing invalid pet queries in the Pet Store API.
 * @author Sushil
 * @date 2024-12-21
 */

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import axios from 'axios';
import { emptyPetData,newPetData} from '../data/petData';
import { PET_API_URL,API_KEY } from '../config/apiConfig'; 

const headers = { Authorization: `Bearer ${API_KEY}` };
let addPetErrorResponse: any;
let updatePetErrorResponse: any;

Given('I add a new pet to the store with invalid query details', async function () {
  console.log(`\n\n----------------POST REQUEST EMPTY PAYLOAD--------------------`);
  try {
    await axios.post(PET_API_URL,emptyPetData,{headers});
  } catch (error: any) {
    addPetErrorResponse = error.response; // Capture the error response
  }
  console.log(`\t\tRESPONSE: ${addPetErrorResponse.status} ${addPetErrorResponse.statusText}`);
});

Then('I get the add new pet error response properly', function () {
  // Assert the error response for adding an invalid pet
  expect(addPetErrorResponse).to.not.be.undefined;
  expect(addPetErrorResponse.status).to.equal(500);
  expect(addPetErrorResponse.statusText).to.equal("Server Error");
  console.log('----------EMPTY PAYLOAD VALIDATION DONE---------------------');
});

When('I send invalid update pet query details', async function () {
  console.log(`\n\n----------------PUT REQUEST INVALID QUERY--------------------`);
  try {
    await axios.put(PET_API_URL+"/1111",newPetData,{headers});
  } catch (error: any) {
    updatePetErrorResponse = error.response; // Capture the error response
  }
  console.log(`\t\tRESPONSE: ${updatePetErrorResponse.status} ${updatePetErrorResponse.statusText}`);
});


// Assert the error response for updating with invalid details
Then('I get the update error response properly', function () {
  expect(updatePetErrorResponse).to.not.be.undefined;
  expect(updatePetErrorResponse.status).to.equal(405);
  expect(updatePetErrorResponse.statusText).to.equal('Method Not Allowed');
  console.log('----------PUT REQUEST VALIDATION DONE---------------------');
});