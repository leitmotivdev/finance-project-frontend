import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  AxiosParams,
  CallbackParams,
  AxiosCustomRequest,
  I$Axios,
} from './config.interface';

const API_URL = import.meta.env.VITE_API_URL;

const process = (response: AxiosResponse) => response.data;

const processParamsUrl = (url: string, params: AxiosParams) => {
  let urlResult = url;

  for (const key in params) {
    urlResult = urlResult.replace(`:${key}`, String(params[key]));
  }

  return urlResult;
};

const axiosCallBack = (
  method: string,
  url: string,
  config?: AxiosCustomRequest,
): AxiosRequestConfig => {
  const request:  AxiosRequestConfig = {
    method,
    url,
  };

  if (!config) return request;

  if (config.params) request.url = processParamsUrl(url, config.params);
  if (config.query) request.params = config.query;
  if (config.body) request.data = config.body;

  return request;
};

export const apiConfig = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
  },
});

export const addAxiosAuthorization = (authorization: string) => {
  // const authorization = getAuthorizationToken();
  if (authorization) {
    apiConfig.defaults.headers.common.Authorization = `Bearer ${authorization}`;
  }
};

export const $axios: I$Axios = {
  get: (url, config?) => {
    return apiConfig(axiosCallBack('GET', url, config)).then(process);
  },

  post: (url, config?) => {
    return apiConfig(axiosCallBack('POST', url, config)).then(process);
  },

  put: (url, config?) => {
    return apiConfig(axiosCallBack('PUT', url, config)).then(process);
  },

  delete: (url, config?) => {
    return apiConfig(axiosCallBack('DELETE', url, config)).then(process);
  },
};
