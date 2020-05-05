import React from 'react';
import { HeaderContainer, MenuContainer } from './header.styles';
import { useMobileMenuState } from '../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { toggleMenu } from '../../context/mobile-menu/mobile-menu.action-creators';
import { Logo } from '../logo/logo.component';
import { Hambuerger } from '../hamburger/hamburger.component';
import { ThemeType } from '../../../types';

interface HeaderProps {
  isSticky?: boolean;
  theme?: ThemeType;
}

export const Header = ({
  isSticky = false,
  theme = 'primary',
}: HeaderProps) => {
  const {
    state: { isVisible: isMenuVisible },
    dispatch,
  } = useMobileMenuState();

  const onMenuClick = () => dispatch(toggleMenu());

  return (
    <HeaderContainer isSticky={isSticky}>
      <Logo theme={theme} />
      <MenuContainer>
        <Hambuerger
          isOpen={isMenuVisible}
          onClick={onMenuClick}
          theme={theme}
        />
      </MenuContainer>
    </HeaderContainer>
  );
};
