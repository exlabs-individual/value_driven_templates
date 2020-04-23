import React from 'react';
import { StyledBurger } from './hamburger.styles';
import { ThemeType } from '../../../types';

interface HambuergerProps {
  isOpen: boolean;
  onClick: () => void;
  theme?: ThemeType;
}

export const Hambuerger = ({
  isOpen,
  onClick,
  theme = 'primary',
}: HambuergerProps) => {
  return (
    <StyledBurger open={isOpen} onClick={onClick} themeType={theme}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
