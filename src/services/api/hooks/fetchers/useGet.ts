import useSWR from 'swr';
import api from '@api/index';

export default function useGet<Data = any, Error = any>(url: string) {
  const {data, error} = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return {data, error};
}
