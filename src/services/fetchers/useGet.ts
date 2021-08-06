import useSWR, {SWRConfiguration} from 'swr';
import api from '@api/index';

export default function useGet<Data = any, Error = any>(
  url: string,
  config: SWRConfiguration = {},
) {
  const {data, error} = useSWR<Data, Error>(
    url,
    async url => {
      const response = await api.get(url);

      return response.data;
    },
    config,
  );

  return {data, error};
}
