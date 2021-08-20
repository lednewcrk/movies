import useFetchInfinity from '@api/fetchers/useFetchInfinity';
import {APiError, PaginatedDataMovie} from '@services/api/types';

const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && previousPageData.page === pageIndex + 1) {
    return null; // reached the end
  }

  return `/movie/upcoming?page=${pageIndex + 1}`; // SWR key
};

const useUpcoming = () => {
  const {data, size, setSize, isValidating, mutate, revalidate, error} =
    useFetchInfinity<PaginatedDataMovie, APiError>(getKey, {
      initialSize: 1,
    });

  return {
    data,
    size,
    setSize,
    isValidating,
    mutate,
    revalidate,
    error,
  };
};

export default useUpcoming;
