import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const MenuContainer = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 9999;

  background-color: ${({ theme }: ThemeProps) => theme.color.primary};

  position: fixed;
  top: 0;
  left: 0;

  & > .menu-nav {
    border-top: 1px solid ${({ theme }: ThemeProps) => theme.color.white};
  }
`;
