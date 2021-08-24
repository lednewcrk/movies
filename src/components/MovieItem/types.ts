import {Movie} from '@services/api/types';

export type Props = {
  movie: Movie;
  empty?: boolean;
  onPressMovie: () => void;
};
