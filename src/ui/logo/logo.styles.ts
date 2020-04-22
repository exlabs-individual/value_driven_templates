import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';
import { ThemeType } from '../../../types';

export const LogoLink = styled.a.attrs(
  ({ themeType = 'primary' }: { themeType?: ThemeType }) => ({
    themeType,
  })
)`
  display: flex;
  align-items: center;
  text-decoration: none;

  & > .logo-img {
    width: 30px;
    height: 30px;
  }

  & > .logo-separator {
    width: 2px;
    height: 32px;
    background-color: ${({
      theme,
      themeType,
    }: ThemeProps & { themeType: ThemeType }) =>
      themeType === 'primary' ? theme.color.white : theme.color.black};
    margin: 0 10px;
  }

  & > .logo-text {
    font-size: 21px;
    margin: 0;
    color: ${({ theme, themeType }: ThemeProps & { themeType: ThemeType }) =>
      themeType === 'primary' ? theme.color.white : theme.color.black};
    font-weight: 700;
  }
`;
