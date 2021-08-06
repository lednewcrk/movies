import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

import {Props} from './types';
import styles from './styles';

export default function Layout({data, error}: Props) {
  const {colors} = useTheme();

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

  return (
    <View style={styles.container}>
      <Text>{data.title}</Text>
    </View>
  );
}
