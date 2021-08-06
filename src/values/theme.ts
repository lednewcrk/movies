export const LIGHT_THEME = {
  background: 'white',
  text: 'black',
  imageShimmer: ['transparent', 'grey', 'transparent'],
};

export type CustomTheme = typeof LIGHT_THEME;

export const DARK_THEME: CustomTheme = {
  background: 'black',
  text: 'white',
  imageShimmer: ['transparent', 'grey', 'transparent'],
};
