import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './styles';
import {Props} from './types';

export default function HomeScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.push('Detail')} />
    </View>
  );
}
