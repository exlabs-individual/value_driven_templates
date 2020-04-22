import styled from 'styled-components';
import { ThemeType, ThemedProps } from '../../../types';
import { ThemeProps } from '../../theme/theme.config';

export const NavigationContainer = styled.div.attrs(
  ({ themeType = 'primary' }: { themeType?: ThemeType }) => ({
    themeType,
  })
)`
  background-color: ${({ theme, themeType }: ThemedProps) =>
    themeType === 'primary' ? theme.color.primary : 'inherit'};
  padding: 10px ${({ theme }: ThemeProps) => theme.padding.small};
  display: flex;
  justify-content: space-between;
`;

export const StyledNav = styled.nav``;

export const StyledList = styled.ul.attrs(
  ({ themeType = 'primary' }: { themeType?: ThemeType }) => ({
    themeType,
  })
)`
  list-style: none;
  display: flex;

  & .nav-item {
    margin-right: 20px;

    &__link {
      color: ${({ theme, themeType }: ThemedProps) =>
        themeType === 'primary' ? theme.color.white : theme.color.black};
      text-decoration: none;
      font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
      font-weight: 700;
    }
  }

  & > .nav-item:last-child {
    margin-right: 0;
  }
`;
