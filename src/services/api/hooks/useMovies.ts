import {SWRConfiguration} from 'swr';
import {PaginatedDataMovie, APiError} from '../types';
import useGet from '../../fetchers/useGet';

export function useMovies(config: SWRConfiguration = {}) {
  const {data, error} = useGet<PaginatedDataMovie, APiError>(
    'movie/upcoming',
    config,
  );

  return {data, error};
}
