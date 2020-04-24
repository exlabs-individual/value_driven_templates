import React from 'react';
import Link from 'next/link';
import {
  StyledNav,
  NavigationContainer,
  StyledList,
  StyledContainer,
} from './desktop-navigation.styles';
import { Logo } from '../logo/logo.component';
import { ThemeType } from '../../../types';
import { AppRoute } from '../../routing/app-routes';
import { SpecialLink } from '../special-link/special-link.component';

interface DesktopNavigationProps {
  theme?: ThemeType;
  isSticky?: boolean;
}

export const DesktopNavigation = ({
  theme = 'primary',
  isSticky = false,
}: DesktopNavigationProps) => {
  return (
    <NavigationContainer
      className="navigation"
      themeType={theme}
      isSticky={isSticky}
    >
      <StyledContainer>
        <Logo theme={theme} />
        <StyledNav>
          <StyledList themeType={theme}>
            <li className="nav-item">
              <Link href={`${process.env.ASSET_PREFIX}${AppRoute.ABOUT}`}>
                <a
                  className="nav-item__link"
                  href={`${process.env.ASSET_PREFIX}${AppRoute.ABOUT}`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${process.env.ASSET_PREFIX}${AppRoute.HOW_TO_CONTRIBUTE}`}
              >
                <a
                  className="nav-item__link"
                  href={`${process.env.ASSET_PREFIX}${AppRoute.HOW_TO_CONTRIBUTE}`}
                >
                  How to contribute?
                </a>
              </Link>
            </li>
            <li className="nav-item nav-item--primary">
              <SpecialLink
                href="https://exlabs.com"
                label="Get in touch"
                target="blank"
                color="red"
              />
            </li>
          </StyledList>
        </StyledNav>
      </StyledContainer>
    </NavigationContainer>
  );
};
