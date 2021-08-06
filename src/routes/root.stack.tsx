import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/Home';
import DetailScreen from 'screens/MovieDetail';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
