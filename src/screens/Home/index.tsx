import React from 'react';
import {View, Text, Button} from 'react-native';
import {useTheme} from 'react-native-paper';

import {useMovies} from '@services/api/hooks/useMovies';
import {useToggleTheme} from '@hooks/useToggleTheme';

import {Props} from './types';
import styles from './styles';

export default function HomeScreen({navigation}: Props) {
  const {colors} = useTheme();
  const {data, error, isLoading} = useMovies();
  const {toggleTheme} = useToggleTheme();

  if (isLoading) {
    return (
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <Text>Carregando dados...</Text>
      </View>
    );
  }

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

  return (
    <View style={styles.container}>
      <Text
        style={{color: colors.text}}>{`Results: ${data?.results.length}`}</Text>
      <Button title="Go to Details" onPress={() => navigation.push('Detail')} />
      <Button title="Toggle theme" onPress={() => toggleTheme()} />
    </View>
  );
}
