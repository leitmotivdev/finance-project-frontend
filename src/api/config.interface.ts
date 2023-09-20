import { AxiosRequestConfig } from 'axios';

export interface AxiosParams {
  [key: string]: string | number;
}

export interface AxiosQuery {
  [key: string]: string | number;
}

export interface AxiosCustomRequest {
  params?: AxiosParams;
  query?: AxiosQuery;
  data?: any;
}

export interface CallbackParams
  extends Array<string | (AxiosRequestConfig | undefined)> {
  0: string;
  1: AxiosRequestConfig | undefined;
}
