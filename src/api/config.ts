import {
  AxiosParams,
  CallbackParams,
  AxiosCustomRequest,
} from './config.interface';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAuthorizationToken } from '../helpers/authorization';

const API_URL = import.meta.env.VITE_API_URL;

const processBody = (response: AxiosResponse) => response.data;

const processParamsUrl = (url: string, params: AxiosParams) => {
  let urlResult = url;

  for (const key in params) {
    urlResult = urlResult.replace(`:${key}`, String(params[key]));
  }

  return urlResult;
};

const axiosCallBack = (
  url: string,
  config?: AxiosCustomRequest
): CallbackParams => {
  let URL = url;
  const CONFIG: AxiosRequestConfig = {};

  if (!config) return [URL, undefined];

  if (config.params) URL = processParamsUrl(url, config.params);
  if (config.query) CONFIG.params = config.query;
  if (config.data) CONFIG.data = config.data;

  return [URL, CONFIG];
};

export const apiConfig = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export const addAxiosAuthorization = () => {
  const authorization = getAuthorizationToken();

  if (authorization) {
    apiConfig.defaults.headers.common.Authorization = authorization;
  }
};

export const $axios = {
  get: (url: string, config?: AxiosCustomRequest) => {
    const [URL, CONFIG] = axiosCallBack(url, config);
    return apiConfig.get(URL, CONFIG).then(processBody);
  },
  post: (url: string, config?: AxiosCustomRequest) => {
    const [URL, CONFIG] = axiosCallBack(url, config);
    return apiConfig.post(URL, CONFIG).then(processBody);
  },
  put: (url: string, config?: AxiosCustomRequest) => {
    const [URL, CONFIG] = axiosCallBack(url, config);
    return apiConfig.put(URL, CONFIG).then(processBody);
  },
  delete: (url: string, config?: AxiosCustomRequest) => {
    const [URL, CONFIG] = axiosCallBack(url, config);
    return apiConfig.delete(URL, CONFIG).then(processBody);
  },
};
