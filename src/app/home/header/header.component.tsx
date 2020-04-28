import React from 'react';
import { SpecialLink } from '../../../ui/special-link/special-link.component';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { Header as HeaderContainer } from '../../../ui/header/header.component';
import {
  HeaderTitle,
  HeaderSubtitle,
  HeaderImage,
} from '../../../ui/header/header.styles';

export const Header = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <HeaderContainer imageUrl={`${process.env.ASSET_PREFIX}/header-img.svg`}>
      <HeaderTitle>Value Driven Engineering</HeaderTitle>
      {isMobile && (
        <HeaderImage
          alt="Header"
          src={`${process.env.ASSET_PREFIX}/header-img.svg`}
        />
      )}
      <HeaderSubtitle>
        Curated, community driven resources and frameworks for IT leaders and
        engineering managers.
      </HeaderSubtitle>
      <AnchorLink
        offset="100"
        href="#articles"
        style={{ textDecoration: 'none' }}
      >
        <SpecialLink href="#articles" label="Explore Resources" />
      </AnchorLink>
    </HeaderContainer>
  );
};
