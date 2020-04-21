import React from 'react';
import Link from 'next/link';
import {
  StyledHeader,
  HeaderTopbar,
  HeaderContent,
  StyledNav,
  TitleContainer,
  HeaderImage,
  Background,
} from './header.styles';
import { Logo } from '../logo/logo.component';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';
import { AppRoute } from '../../routing/app-routes';

interface HeaderProps {
  image: 'header-img' | 'about' | 'how-to-contribute';
}

export const Header = ({ image }: HeaderProps) => {
  const { isDesktop } = useDeviceDetect();

  return (
    <StyledHeader>
      <Background style={{ height: isDesktop ? '75%' : '100%' }} />
      <HeaderTopbar>
        <Logo />
        <StyledNav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href={AppRoute.ABOUT}>
                <a href={AppRoute.ABOUT}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={AppRoute.HOW_TO_CONTRIBUTE}>
                <a href={AppRoute.HOW_TO_CONTRIBUTE}>How to contribute?</a>
              </Link>
            </li>
            <li className="nav-item nav-item--primary">
              <Link href="https://exlabs.com">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://exlabs.com"
                >
                  Get in touch
                </a>
              </Link>
            </li>
          </ul>
        </StyledNav>
      </HeaderTopbar>
      <HeaderContent>
        <TitleContainer>
          <h2 className="title">Value Driven Engineering</h2>
          <h3 className="sub-title">Powered by Exlabs</h3>
          <div className="about-company">
            We deliver high-level consultancy & flexible, complex data-driven
            software solutions for the companies of the future.
          </div>
        </TitleContainer>
        {isDesktop && (
          <HeaderImage
            src={`${process.env.ASSET_PREFIX}/${image}.svg`}
            alt="Header"
          />
        )}
      </HeaderContent>
    </StyledHeader>
  );
};
