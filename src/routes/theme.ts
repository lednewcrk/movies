import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import deepmerge from 'deepmerge';
import {LIGHT_THEME, DARK_THEME} from '@values/theme';

export const CombinedDefaultTheme = deepmerge(
  deepmerge(PaperDefaultTheme, NavigationDefaultTheme),
  {
    myOwnProperty: true,
    colors: LIGHT_THEME,
  },
);

export const CombinedDarkTheme = deepmerge(
  deepmerge(PaperDarkTheme, NavigationDarkTheme),
  {
    myOwnProperty: true,
    colors: DARK_THEME,
  },
);
