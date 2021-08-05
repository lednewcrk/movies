import axios from 'axios';
import {API_BASE, API_KEY} from '@env';

const LANGUAGE = 'pt-BR';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: API_KEY,
  },
});

api.interceptors.request.use(config => {
  console.log('intercept request...');

  config.params = Object.assign(config.params ?? {}, {
    api_key: API_KEY,
    language: LANGUAGE,
  });

  console.log(config.params);

  return config;
});

export default api;
