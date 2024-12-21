/**
 * httpClient.ts
 *
 * A simple HTTP client class for making API requests using Axios.
 * It encapsulates common HTTP methods (GET, POST, PUT, DELETE).
 *
 * @author Sushil
 * @date 2024-12-21
 */

import axios, { AxiosInstance } from "axios";

class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }

  async get(endpoint: string) {
    return this.client.get(endpoint);
  }

  async post(endpoint: string, data: object) {
    return this.client.post(endpoint, data);
  }

  async put(endpoint: string, data: object) {
    return this.client.put(endpoint, data);
  }

  async delete(endpoint: string) {
    return this.client.delete(endpoint);
  }
}

export const apiClient = new HttpClient("https://petstore.swagger.io/v2");
