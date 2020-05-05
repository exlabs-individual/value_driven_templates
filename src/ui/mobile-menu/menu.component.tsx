import React from 'react';
import { MenuContainer } from './menu.styles';
import { useMobileMenuState } from '../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { Header } from '../mobile-header/header.component';
import { MenuNav } from './menu-nav/menu-nav.component';

export const Menu = () => {
  const {
    state: { isVisible },
  } = useMobileMenuState();

  return (
    <React.Fragment>
      {isVisible && (
        <MenuContainer>
          <Header />
          <MenuNav />
        </MenuContainer>
      )}
    </React.Fragment>
  );
};
