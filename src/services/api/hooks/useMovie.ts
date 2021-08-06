import {Movie, APiError} from '../types';
import useGet from '../../fetchers/useGet';

export function useMovie(id: number) {
  const {data, error} = useGet<Movie, APiError>(`movie/${id}`, {
    refreshWhenOffline: true,
  });

  return {data, error};
}
