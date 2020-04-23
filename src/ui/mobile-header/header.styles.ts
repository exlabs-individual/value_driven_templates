import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const HeaderContainer = styled.div.attrs(
  ({ isSticky = false }: { isSticky?: boolean }) => ({ isSticky })
)`
  background-color: ${({
    theme,
    isSticky,
  }: ThemeProps & { isSticky?: boolean }) =>
    isSticky ? theme.color.primary : 'inherit'};
  width: calc(100% - 40px);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  animation: none;

  ${(props) =>
    props.isSticky &&
    `
      position: fixed;
      top: 0;
      left: 0;
      width: calc(100% - 40px);
      z-index: 999;
  `}
`;

export const MenuContainer = styled.div`
  & > .menu-btn {
    background-color: inherit;
    border: 0;
    outline: none;
  }
`;
