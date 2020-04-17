import { ThemedStyledProps } from 'styled-components';

export type Colors = 'primary' | 'red' | 'dark-red' | 'white';

export type FontFamilies = 'primary' | 'secondary';

export interface Theme {
  color: { [key in Colors]: string };
  fontFamily: { [key in FontFamilies]: string };
}

export type ThemeProps<T = {}> = ThemedStyledProps<T, Theme>;

export const theme: Theme = {
  color: {
    primary: '#044aaf',
    red: '#ff3e5b',
    white: '#ffffff',
    'dark-red': '#ee2d4a',
  },
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Open Sans',
  },
};
