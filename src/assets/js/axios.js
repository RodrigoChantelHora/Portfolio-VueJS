// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.kristta.com.br/api',
  timeout: 10000
});

export default instance;
