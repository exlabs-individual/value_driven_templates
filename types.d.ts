import { ThemeProps } from './src/theme/theme.config';

export type AppAction<K, V = void> = V extends void
  ? { type: K }
  : { type: K } & V;

export type ThemeType = 'primary' | 'secondary';

export interface ThemedProps extends ThemeProps {
  themeType: ThemeType;
}
