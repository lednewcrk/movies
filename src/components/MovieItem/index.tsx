import React from 'react';
import {Pressable, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';

import {getPostUri} from '@services/api';

import {Props} from './types';

const MovieItem = React.memo(({movie, onPressMovie, aspectRatio}: Props) => {
  const {colors} = useTheme();

  const source = {uri: getPostUri(movie.poster_path)};

  const imageStyle = {
    backgroundColor: colors.grey_10,
    aspectRatio,
  };

  return (
    <Pressable onPress={onPressMovie}>
      <FastImage source={source} style={imageStyle} />
      <Text>{movie.title}</Text>
    </Pressable>
  );
});

export default MovieItem;
