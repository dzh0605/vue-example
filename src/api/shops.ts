import { FileItem } from '@arco-design/web-vue';
import axios from 'axios';
import qs from 'query-string';

export interface ShopsRecord {
  id: string;
  name: string;
  image: string;
  appid: string;
  url: string;
  sort: number;
  remark:string;
  enabled: boolean;
  tables: string | null,
  created: string;
  updated: string;
  [key:string]:any
}

export type ShopsRecordPartial = Partial<ShopsRecord>

export interface ShopsParams {
  page: number;
  perPage: number;
  sort?: string;
}

export interface ShopsListRes {
  items: ShopsRecord[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export function queryShopsList(params: ShopsParams) {
  return axios.get<any, ShopsListRes>('/api/collections/shops/records', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function createShops(data:ShopsRecordPartial, file?:FileItem){
  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key])
  }
  if(file){
    formData.set('image', file.file as any)
  }
  return axios.post<any, ShopsRecordPartial>(`/api/collections/shops/records`, formData)
}

export function updateShops(data:ShopsRecordPartial, file?:FileItem){
  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key])
  }
  if(file){
    formData.set('image', file.file as any)
  }
  return axios.patch<any, ShopsRecordPartial>(`/api/collections/shops/records/${data.id}`, formData)
}

export function deleteShops(data:ShopsRecordPartial){
  return axios.delete(`/api/collections/shops/records/${data.id}`)
}
