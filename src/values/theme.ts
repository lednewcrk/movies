export const hexToRgbA = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};

const DEFAULT_COLORS = {
  transparent: 'transparent',

  white: '#ffffff',
  white_20: hexToRgbA('#ffffff', 0.2),
  white_30: hexToRgbA('#ffffff', 0.3),

  grey: '#808080',
  grey_30: hexToRgbA('#808080', 0.3),
  grey_20: hexToRgbA('#808080', 0.2),
  grey_10: hexToRgbA('#808080', 0.1),
};

export const LIGHT_THEME = {
  ...DEFAULT_COLORS,

  primary: '#2962ff',
  primaryLight: '#768fff',
  primaryDark: '#0039cb',
  secondary: '#880e4f',
  secondaryLight: '#bc477b',
  secondaryDark: '#560027',

  background: 'white',
  text: 'black',
};

export type CustomTheme = typeof LIGHT_THEME;

export const DARK_THEME: CustomTheme = {
  ...LIGHT_THEME,
};
