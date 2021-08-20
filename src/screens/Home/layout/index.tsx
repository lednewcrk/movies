import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {RecyclerListView, DataProvider} from 'recyclerlistview';

import MovieItem from '@components/MovieItem';
import {Movie} from '@services/api/types';

import {Props} from './types';
import styles, {ITEM_ASPECT_RATIO} from './styles';
import LayoutProvider from './LayoutProvider';

const layoutProvider = new LayoutProvider();

export default function Layout({
  data,
  error,
  onEndReached,
  onEndReachedThreshold = 0.6,
  onPressMovie,
}: Props) {
  const {colors} = useTheme();

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }).cloneWithRows(data ?? []),
  );

  useEffect(() => {
    setDataProvider(prev => prev.cloneWithRows(data ?? []));
  }, [data]);

  const rowRenderer = useCallback(
    (type: string | number, movie: Movie) => (
      <MovieItem
        movie={movie}
        onPressMovie={() => onPressMovie(movie)}
        aspectRatio={ITEM_ASPECT_RATIO}
      />
    ),
    [],
  );

  if (error) {
    return (
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <Text style={{color: colors.text}}>
          <Text>{'Error...\n'}</Text>
          <Text>{`Status code: ${error.status_code}\n`}</Text>
          <Text>{`Message: ${error.status_message}`}</Text>
        </Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data.length > 0 && (
        <RecyclerListView
          rowRenderer={rowRenderer}
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          disableRecycling
        />
      )}
    </View>
  );
}
