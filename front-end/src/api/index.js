import axios from 'axios';

import { extractResponsData, getToken } from '../utils/api';

axios.interceptors.request.use(config => ({
  ...config,
  baseURL: 'http://localhost:3005/api/',
  headers: { Authorization: getToken() },
}));

export const productAPI = {
  getProductsList: async productType => {
    const respons = await axios.get(`products?type=${productType}`);

    return extractResponsData(respons);
  },

  addProduct: async body => {
    const respons = await axios.post('products', body);

    return extractResponsData(respons);
  },

  updateProduct: async body => {
    const respons = await axios.put(`products/${body.id}`, body);

    return extractResponsData(respons);
  },

  deleteProduct: async id => {
    const respons = await axios.delete(`products/${id}`);

    return extractResponsData(respons);
  },
};

export const authAPI = {
  login: async body => {
    const respons = await axios.post('auth/login', body);

    return extractResponsData(respons);
  },

  registration: async body => {
    const respons = await axios.post('auth/register', body);

    return extractResponsData(respons);
  },
};

export const orderAPI = {
  sendOrder: async body => {
    const respons = await axios.post('order', body);

    return extractResponsData(respons);
  },

  getOrderHistory: async () => {
    const respons = await axios.get('order');

    return extractResponsData(respons);
  },
};

export const userAPI = {
  update: async body => {
    const respons = await axios.put('user', body);

    return extractResponsData(respons);
  },

  delete: async () => {
    const respons = await axios.delete('user/delete');

    return extractResponsData(respons);
  },
};
