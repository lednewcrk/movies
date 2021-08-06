import {PaginatedDataMovie, APiError, Movie} from '@api/types';

export type Props = {
  data: PaginatedDataMovie | undefined;
  error: APiError | undefined;
  onPressMovie: (movie: Movie) => void;
};

export enum ITEM_TYPE {
  SPAN_1 = 'ITEM_SPAN_1',
}
