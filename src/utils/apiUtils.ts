/**
 * apiUtils.ts
 *
 * Utility functions for interacting with the Pet Store API.
 * Provides methods to create, fetch, update, and delete pet details.
 *
 * @author Sushil
 * @date 2024-12-21
 */

import axios from 'axios';
import { PET_API_URL } from '../config/apiConfig'; // Import the base URL

let response;

// Function to create a new pet
export const createPet = async (petData: any) => {
  response = await axios.post(PET_API_URL, petData);
  // console.log(response);
  return response;
};

// Function to fetch a pet by ID
export const getPetById = async (petId: number) => {
  response = await axios.get(`${PET_API_URL}/${petId}`);
  // console.log(response);
  return response;
};

// Function to update a pet by ID
export const updatePet = async (petId: number, petData: any) => {
  response = await axios.put(`${PET_API_URL}`, petData);
  // console.log(response);
  return response;
};

// Function to delete a pet by ID
export const deletePet = async (petId: number) => {
  response = await axios.delete(`${PET_API_URL}/${petId}`);
  // console.log(response);
  return response;
};