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
import { Logo } from '../../logo/logo.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const Header = () => {
  const { isDesktop } = useDeviceDetect();

  return (
    <StyledHeader>
      <Background style={{ height: isDesktop ? '75%' : '100%' }} />
      <HeaderTopbar>
        <Logo />
        <StyledNav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link href="#">How to contribute?</Link>
            </li>
            <li className="nav-item nav-item--primary">
              <Link href="#">Get in touch</Link>
            </li>
          </ul>
        </StyledNav>
      </HeaderTopbar>
      <HeaderContent>
        <TitleContainer>
          <h2 className="title">Value Driven Engineering</h2>
          <h4 className="sub-title">Powered by Exlabs</h4>
          <div className="about-company">
            We deliver high-level consultancy & flexible, complex data-driven
            software solutions for the companies of the future.
          </div>
        </TitleContainer>
        {isDesktop && (
          <HeaderImage
            src={`${process.env.ASSET_PREFIX}/header-img.svg`}
            alt="Header"
          />
        )}
      </HeaderContent>
    </StyledHeader>
  );
};
