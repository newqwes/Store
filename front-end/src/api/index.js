import Axios from 'axios';

import { extractResponsData, getToken } from '../utils/api';

const instance = Axios.create({
  baseURL: 'http://localhost:3005/api/',
});

export const productAPI = {
  getProductsList: async productType => {
    const respons = await instance.get(`products?type=${productType}`);

    return extractResponsData(respons);
  },
};

export const authAPI = {
  login: async body => {
    const respons = await instance.post('auth/login', body);

    return extractResponsData(respons);
  },

  registration: async body => {
    const respons = await instance.post('auth/register', body);

    return extractResponsData(respons);
  },
};

export const orderAPI = {
  sendOrder: async body => {
    const respons = await instance.post('order', body, {
      headers: { Authorization: getToken() },
    });

    return extractResponsData(respons);
  },

  getUserOrders: async () => {
    const respons = await instance.get('order', {
      headers: { Authorization: getToken() },
    });

    return extractResponsData(respons);
  },
};

export const userAPI = {
  update: async body => {
    const respons = await instance.put('user', body, {
      headers: { Authorization: getToken() },
    });

    return extractResponsData(respons);
  },

  delete: async () => {
    const respons = await instance.delete('user/delete', {
      headers: { Authorization: getToken() },
    });

    return extractResponsData(respons);
  },
};
