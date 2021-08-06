import React from 'react';

import {useMovie} from '@api/hooks/useMovie';

import {Props} from './types';
import Layout from './layout';

export default function MovieDetailScreen({route}: Props) {
  const movie = useMovie(route.params.id);

  return <Layout {...movie} />;
}
