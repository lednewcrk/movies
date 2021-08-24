import useGet from '@services/api/fetchers/useGet';
import {APiError, Movie} from '@services/api/types';

const useMovie = (id: number) => {
  const {data, error} = useGet<Movie, APiError>(`movie/${id}`);
  return {data, error};
};

export default useMovie;
