import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import {AuthenticationProvider} from '@context/authentication/AuthenticationContext';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {CustomTheme} from '@values/colors';

import {CombinedDefaultTheme, CombinedDarkTheme} from './theme';
import RootStack from './root.stack';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors extends CustomTheme {}

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

export default function Router() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  function toggleTheme() {
    setIsDarkTheme(isDark => !isDark);
  }

  return (
    <AuthenticationProvider toggleTheme={toggleTheme}>
      {/* @ts-ignore */}
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </AuthenticationProvider>
  );
}
