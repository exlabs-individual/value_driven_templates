import React from 'react';
import { StyledNav, StyledListItem, StyledList } from './menu.styles';
import { useMobileMenuState } from '../../../hooks/use-mobile-menu/use-mobile-menu.hook';
import Link from 'next/link';
import { toggleMenu } from '../../../context/mobile-menu/mobile-menu.action-creators';

export const Menu = () => {
  const {
    dispatch,
    state: { isVisible },
  } = useMobileMenuState();

  const onMenuItemClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <React.Fragment>
      {isVisible && (
        <StyledNav>
          <StyledList>
            <StyledListItem onClick={onMenuItemClick}>
              <Link href="#">Home</Link>
            </StyledListItem>
            <StyledListItem onClick={onMenuItemClick}>
              <Link href="/#">About the project</Link>
            </StyledListItem>
            <StyledListItem onClick={onMenuItemClick}>
              <Link href="#">How to contribute?</Link>
            </StyledListItem>
          </StyledList>
        </StyledNav>
      )}
    </React.Fragment>
  );
};
