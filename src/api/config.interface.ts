import { AxiosRequestConfig } from 'axios';

export interface ReponseApi {
  sucess: boolean;
  message: string;
  data?: any;
}

export interface AxiosParams {
  [key: string]: string | number;
}

export interface AxiosQuery {
  [key: string]: string | number;
}

export interface AxiosCustomRequest {
  params?: AxiosParams;
  query?: AxiosQuery;
  body?: any;
}

export interface CallbackParams
  extends Array<string | (AxiosRequestConfig | undefined)> {
  0: string;
  1: AxiosRequestConfig | undefined;
}

export interface I$Axios {
  [key: string]: (url: string, config?: AxiosCustomRequest) => any;
}
