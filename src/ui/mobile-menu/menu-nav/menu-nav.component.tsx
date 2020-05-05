import React from 'react';
import Link from 'next/link';
import {
  StyledList,
  StyledListItem,
  StyledNav,
  StyledLink,
} from './menu-nav.styles';
import { navigationData } from '../../../routing/app-routes';
import { useMobileMenuState } from '../../../hooks/use-mobile-menu/use-mobile-menu.hook';
import { toggleMenu } from '../../../context/mobile-menu/mobile-menu.action-creators';

export const MenuNav = () => {
  const { dispatch } = useMobileMenuState();

  const onClick = () => dispatch(toggleMenu());

  return (
    <StyledNav className="menu-nav">
      <StyledList>
        {navigationData.map(({ label, link }) => (
          <StyledListItem onClick={onClick}>
            <Link href={`${process.env.ASSET_PREFIX}${link}`}>
              <StyledLink href={`${process.env.ASSET_PREFIX}${link}`}>
                {label}
              </StyledLink>
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};
