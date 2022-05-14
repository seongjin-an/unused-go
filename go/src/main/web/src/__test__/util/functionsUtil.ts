import axios, { AxiosResponse } from 'axios';

export interface IImsi {}

export interface IPerson {
  name: string;
  age: number;
}

export interface ICity {
  name: string;
  place: string;
}

export const getPerson = (): Promise<IPerson> => {
  return axios.get('/api/user').then((i: AxiosResponse<IPerson>) => i.data);
};

export const getCity = (): Promise<ICity> => {
  return axios.get('/api/city').then((i: AxiosResponse<ICity>) => i.data);
};
