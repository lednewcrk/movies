import {APiError, Movie} from '@api/types';

export type Props = {
  data: Movie | undefined;
  error: APiError | undefined;
};
