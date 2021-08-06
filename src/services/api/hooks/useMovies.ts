import {PaginatedDataMovie, APiError} from '../types';
import useGet from '../../fetchers/useGet';

export function useMovies() {
  const {data, error} = useGet<PaginatedDataMovie, APiError>('movie/upcoming', {
    refreshWhenOffline: true,
  });

  return {data, error};
}
