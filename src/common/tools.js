import axios from 'axios';

export class http {
  static async get(url, params) {
    try {
      return await axios.get(url, { params });
    } catch (e) {
      console.log(e);
    }
  }

  static async post(url, params) {
    try {
      return await axios.post(url, params);
    } catch (e) {
      console.log(e);
    }
  }
}
