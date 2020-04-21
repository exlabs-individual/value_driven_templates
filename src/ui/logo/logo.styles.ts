import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const LogoLink = styled.a`
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
    background-color: ${({ theme }: ThemeProps) => theme.color.white};
    margin: 0 10px;
  }

  & > .logo-text {
    font-size: 21px;
    margin: 0;
    color: ${({ theme }: ThemeProps) => theme.color.white};
    font-weight: 700;
  }
`;
