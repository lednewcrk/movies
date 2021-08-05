import {Movie, PaginatedData, Error} from '../types';
import useGet from './fetchers/useGet';

type Data = PaginatedData<Movie>;

export function useMovies() {
  const {data, error} = useGet<Data, Error>('movie/upcoming');

  return {data, error, isLoading: !data && !error};
}
