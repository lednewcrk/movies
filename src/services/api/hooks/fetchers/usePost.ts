import useSWR from 'swr';
import api from '@api/index';

export function usePost<Data = any, Error = any>(url: string, params?: any) {
  const {data, error} = useSWR<Data, Error>(url, async url => {
    const response = await api.post(url, params);

    return response.data;
  });

  return {data, error};
}
