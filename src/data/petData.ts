/**
 * @fileoverview Pet Data to be used in step definitions
 * @author Sushil
 * @date 2024-12-21
 */

export const newPetData = {
  name: 'max',
  status: 'available',
};

export const updatedPetData = {
  name: 'racer',
  status: 'sold',
};

export const petwithID = {                              
  id: Math.floor(Math.random() * 10000),  // Random pet ID
  name: newPetData.name,                  
  status: newPetData.status               
};

export const emptyPetData = {
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
};

