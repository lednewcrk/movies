import {APiError, Movie} from '@api/types';

export type Props = {
  data?: Movie[];
  error: APiError | undefined;
  onPressMovie: (movie: Movie) => void;
  onEndReached: () => void;
  onEndReachedThreshold?: number;
};

export enum ITEM_TYPE {
  SPAN_1 = 'ITEM_SPAN_1',
}
