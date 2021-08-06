import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './root.stack';
import {AuthenticationProvider} from '@context/authentication/AuthenticationContext';

export default function Router() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  function toggleTheme() {
    console.log('toggle theme...');
    setIsDarkTheme(isDark => !isDark);
  }
  return (
    <AuthenticationProvider toggleTheme={toggleTheme}>
        <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    </AuthenticationProvider>
  );
}
