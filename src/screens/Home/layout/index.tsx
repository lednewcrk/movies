import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useTheme} from 'react-native-paper';
import {RecyclerListView, DataProvider} from 'recyclerlistview';
import FastImage from 'react-native-fast-image';

import {getPostUri} from '@api/util';
import {Movie} from '@api/types';

import {Props} from './types';
import styles from './styles';
import LayoutProvider from './LayoutProvider';

export default function Layout({data, error, onPressMovie}: Props) {
  const {colors} = useTheme();

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }).cloneWithRows([]),
  );

  const layoutProvider = new LayoutProvider(dataProvider);

  useEffect(() => {
    setDataProvider(dataProvider =>
      dataProvider.cloneWithRows(data?.results ?? []),
    );
  }, [data]);

  if (error) {
    return (
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <Text style={{color: colors.text}}>
          <Text>{`Error...\n`}</Text>
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

  const renderRow = (type: string | number, movie: Movie) => (
    <Pressable onPress={() => onPressMovie(movie)}>
      <FastImage
        source={{uri: getPostUri(movie.poster_path)}}
        style={{aspectRatio: 500 / 750}}
      />
      <Text>{movie.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <RecyclerListView
        rowRenderer={renderRow}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
      />
    </View>
  );
}
