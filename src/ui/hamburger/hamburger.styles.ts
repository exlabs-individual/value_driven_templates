import styled from 'styled-components';
import { ThemeType, ThemedProps } from '../../../types';

export const StyledBurger = styled.button.attrs(
  ({
    open = false,
    themeType = 'primary',
  }: {
    open?: boolean;
    themeType?: ThemeType;
  }) => ({ open, themeType })
)`
  background-color: inherit;
  border: none;
  outline: none;
  padding: 0;

  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform-origin: 1px;
  cursor: pointer;

  & > div {
    width: 32px;
    height: 4px;
    background-color: ${({ theme, themeType }: ThemedProps) =>
      themeType === 'primary' ? theme.color.white : theme.color.black};
    border-radius: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
