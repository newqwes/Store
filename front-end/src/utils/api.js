import { getOr } from 'lodash/fp';

export const getToken = () => {
  const state = localStorage.getItem('state');
  const token = getOr(null, ['user', 'data', 'token'], JSON.parse(state));

  return token;
};

export const extractResponsData = respons => getOr(null, ['data', 'data'], respons);
