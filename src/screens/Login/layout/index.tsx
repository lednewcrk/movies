import React from 'react';
import {View, Text, Pressable, Button} from 'react-native';
import {useTheme} from 'react-native-paper';

import {Props} from './types';
import styles from './styles';
import {useLogin} from 'hooks/useLogin';

export default function Layout({}: Props) {
  const {colors} = useTheme();
  const {onLogin} = useLogin();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text>Login</Text>
      <Button title={'Do login'} onPress={onLogin} />
    </View>
  );
}
