import React from 'react';
import { HeaderContainer, LogoContainer, MenuContainer } from './header.styles';
import { useMobileMenuState } from '../../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { toggleMenu } from '../../../context/mobile-menu/mobile-menu.action-creators';

export const Header = () => {
  const {
    state: { isVisible: isMenuVisible },
    dispatch,
  } = useMobileMenuState();

  const onMenuClick = () => dispatch(toggleMenu());

  return (
    <HeaderContainer>
      <LogoContainer>
        <img className="logo-img" src="/logo-small.svg" alt="Logo" />
        <span className="logo-separator"></span>
        <h1 className="logo-text">value reader.</h1>
      </LogoContainer>
      <MenuContainer>
        <button className="menu-btn" onClick={onMenuClick}>
          <img
            src={isMenuVisible ? '/close.svg' : '/hamburger.svg'}
            alt="Hamburger menu"
            className="hamburger-icon"
          />
        </button>
      </MenuContainer>
    </HeaderContainer>
  );
};
