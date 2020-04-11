import React from 'react';
import { useMobileMenuState } from '../../../hooks/use-mobile-menu/use-mobile-menu.hook';

export const Menu = () => {
  const {
    state: { isVisible },
  } = useMobileMenuState();

  return <div>MENU is {isVisible ? 'visible' : 'not visible'}</div>;
};
