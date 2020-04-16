import React from 'react';
import { HeaderContainer, MenuContainer } from './header.styles';
import { useMobileMenuState } from '../../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { toggleMenu } from '../../../context/mobile-menu/mobile-menu.action-creators';
import { Logo } from '../../logo/logo.component';

export const Header = () => {
  const {
    state: { isVisible: isMenuVisible },
    dispatch,
  } = useMobileMenuState();

  const onMenuClick = () => dispatch(toggleMenu());

  return (
    <HeaderContainer>
      <Logo />
      <MenuContainer>
        <button className="menu-btn" onClick={onMenuClick}>
          <img
            src={
              isMenuVisible
                ? `${process.env.ASSET_PREFIX}/close.svg`
                : `${process.env.ASSET_PREFIX}/hamburger.svg`
            }
            alt="Hamburger menu"
            className="hamburger-icon"
          />
        </button>
      </MenuContainer>
    </HeaderContainer>
  );
};
