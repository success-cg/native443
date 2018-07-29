import axios from 'axios';
import Config from './config.js';

export class http {
  static async get(url, params) {
    const urlMap = url.split(':');
    const href = Config.vhost[urlMap[0]] + urlMap[1];
    try {
      return await axios.get(href, { params });
    } catch (e) {
      console.log(e);
    }
  }

  static async post(url, params) {
    const urlMap = url.split(':');
    const href = Config.vhost[urlMap[0]] + urlMap[1];
    try {
      return await axios.post(href, params);
    } catch (e) {
      console.log(e);
    }
  }
}
