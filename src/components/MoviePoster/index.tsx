import React from 'react';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';

import {getPostUri} from '@services/api';
import Theme from '@values/theme';

import {Props} from './types';

const MoviePoster = ({uri, style}: Props) => {
  const {colors} = useTheme();

  const source = {uri: getPostUri(uri)};

  const imageStyle = {
    backgroundColor: colors.grey_10,
    aspectRatio: Theme.POSTER_ASPECT_RATIO,
  };

  return <FastImage source={source} style={[imageStyle, style]} />;
};

export default MoviePoster;
