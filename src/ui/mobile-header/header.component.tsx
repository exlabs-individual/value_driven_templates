import React from 'react';
import { HeaderContainer, MenuContainer } from './header.styles';
import { useMobileMenuState } from '../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { toggleMenu } from '../../context/mobile-menu/mobile-menu.action-creators';
import { Logo } from '../logo/logo.component';
import { Hambuerger } from '../hamburger/hamburger.component';

interface HeaderProps {
  isSticky?: boolean;
}

export const Header = ({ isSticky = false }: HeaderProps) => {
  const {
    state: { isVisible: isMenuVisible },
    dispatch,
  } = useMobileMenuState();

  const onMenuClick = () => dispatch(toggleMenu());

  return (
    <HeaderContainer isSticky={isSticky}>
      <Logo theme={isSticky ? 'primary' : 'secondary'} />
      <MenuContainer>
        <Hambuerger
          isOpen={isMenuVisible}
          onClick={onMenuClick}
          theme={isSticky ? 'primary' : 'secondary'}
        />
      </MenuContainer>
    </HeaderContainer>
  );
};
