import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import {CombinedDefaultTheme, CombinedDarkTheme} from './theme';

import RootStack from './root.stack';
import {AuthenticationProvider} from '@context/authentication/AuthenticationContext';

export default function Router() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  function toggleTheme() {
    console.log('toggle theme...');
    setIsDarkTheme(isDark => !isDark);
  }

  return (
    <AuthenticationProvider toggleTheme={toggleTheme}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </AuthenticationProvider>
  );
}
