import {useSWRInfinite, SWRInfiniteConfiguration} from 'swr';
import api from '@api/index';

export default function useGet<Data = any, Error = any>(
  getKey: (pageIndex: number, previousPageData: any) => string | null,
  config: SWRInfiniteConfiguration = {},
) {
  const {data, size, setSize, isValidating, mutate, revalidate, error} =
    useSWRInfinite<Data, Error>(
      getKey,
      async url => {
        const response = await api.get(url);
        return response.data;
      },
      config,
    );

  return {
    data,
    size,
    setSize,
    isValidating,
    mutate,
    revalidate,
    error,
  };
}
