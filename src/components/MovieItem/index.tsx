import React from 'react';
import {Pressable, Text} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import MoviePoster from '@components/MoviePoster';

import {Props} from './types';

const MovieItem = React.memo(({movie, onPressMovie}: Props) => (
  <Pressable onPress={onPressMovie}>
    <SharedElement id={`item.${movie.id}.photo`}>
      <MoviePoster uri={movie.poster_path} />
    </SharedElement>
    <Text>{movie.title}</Text>
  </Pressable>
));

export default MovieItem;
