import axios from 'axios';

// modify the base url here
// export const BASE_URL = 'https://api.com'
export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const API = {
  async get(url: string, headers?: any): Promise<any> {
    return await axios.get(url, {
      // baseURL: BASE_URL,
      headers,
    });
  },
  async post(url: string, body?: any, headers?: any): Promise<any> {
    return await axios.post(url, body, {
      // baseURL: BASE_URL,
      headers,
    });
  },
  async patch(url: string, body?: any, headers?: any): Promise<any> {
    return await axios.patch(url, body, {
      // baseURL: BASE_URL,
      headers,
    });
  },
  async put(url: string, body?: any, headers?: any): Promise<any> {
    return await axios.put(url, body, {
      // baseURL: BASE_URL,
      headers,
    });
  },
};
