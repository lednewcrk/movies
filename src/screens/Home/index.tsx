import React from 'react';
import {View, Text, Button} from 'react-native';
import {useMovies} from 'services/api/hooks/useMovies';

import styles from './styles';
import {Props} from './types';

export default function HomeScreen({navigation}: Props) {
  const {data, error, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{`Results: ${data?.results.length}`}</Text>
      <Button title="Go to Details" onPress={() => navigation.push('Detail')} />
    </View>
  );
}
