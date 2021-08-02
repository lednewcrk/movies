import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './root.stack';

export default function Router() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
