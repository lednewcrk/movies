import React from 'react';

import {Props} from './types';
import Layout from './layout';
import useMovie from './hooks/useMovie';

export default function MovieDetailScreen({route}: Props) {
  const movie = useMovie(route.params.id);

  return <Layout {...movie} />;
}
