import React from 'react';

import {useMovies} from '@api/hooks/useMovies';
import {Movie} from '@api/types';

import {Props} from './types';
import Layout from './layout';

export default function HomeScreen({navigation}: Props) {
  const movies = useMovies({
    refreshWhenOffline: true,
  });

  const onPressMovie = (movie: Movie) => {
    navigation.push('MovieDetail', {
      id: movie.id,
    });
  };

  return <Layout {...movies} onPressMovie={onPressMovie} />;
}
