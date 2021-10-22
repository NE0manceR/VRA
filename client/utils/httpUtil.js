import { httpBase } from './httpBaseUtil';

export const fetch = (endpoint) => {
  return httpBase().get(endpoint);
};

export const store = (endpoint, data) => {
  return httpBase().post(endpoint, data);
};
