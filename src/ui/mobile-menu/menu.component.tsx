import React from 'react';
import {
  StyledNav,
  StyledListItem,
  StyledList,
  SpecialListItem,
} from './menu.styles';
import { useMobileMenuState } from '../../hooks/use-mobile-menu/use-mobile-menu.hook';
import Link from 'next/link';
import { toggleMenu } from '../../context/mobile-menu/mobile-menu.action-creators';
import { navigationData } from '../../routing/app-routes';

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
            {navigationData.map((navigationItem) => (
              <StyledListItem
                onClick={onMenuItemClick}
                key={navigationItem.link}
              >
                <Link href={navigationItem.link}>
                  <a href={navigationItem.link}>{navigationItem.label}</a>
                </Link>
              </StyledListItem>
            ))}
            <SpecialListItem onClick={onMenuItemClick}>
              <Link href="https://exlabs.com">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://exlabs.com"
                >
                  Get in touch
                </a>
              </Link>
            </SpecialListItem>
          </StyledList>
        </StyledNav>
      )}
    </React.Fragment>
  );
};
