import React, {useState, useEffect} from 'react';

import {Movie} from '@api/types';

import {Props} from './types';
import Layout from './layout';
import useUpcoming from './hooks/useUpcoming';

export default function HomeScreen({navigation}: Props) {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  const {data, setSize, error} = useUpcoming();

  const onPressMovie = (movie: Movie) => {
    navigation.push('MovieDetail', {
      id: movie.id,
    });
  };

  const onEndReached = () => {
    setSize(s => s + 1);
  };

  useEffect(() => {
    if (data) {
      const all: Movie[] = [];
      data.forEach(it => all.push(...it.results));

      setUpcomingMovies(all);
    }
  }, [data]);

  return (
    <Layout
      data={upcomingMovies}
      error={error}
      onPressMovie={onPressMovie}
      onEndReached={onEndReached}
    />
  );
}
