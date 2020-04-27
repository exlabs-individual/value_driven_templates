import React from 'react';
import {
  HeaderContainer,
  TextContainer,
  HeaderImage,
  StyledContainer,
} from './header.styles';
import { SpecialLink } from '../../../ui/special-link/special-link.component';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const Header = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <HeaderContainer className="header-container">
      <StyledContainer>
        <TextContainer>
          <h2 className="title">Value Driven Engineering</h2>
          <h3 className="sub-title">Powered by Exlabs</h3>
          <p className="additional-info">
            Curated, community driven resources and frameworks for IT leaders
            and engineering managers.
          </p>
          <AnchorLink
            offset="100"
            href="#articles"
            style={{ textDecoration: 'none' }}
          >
            <SpecialLink href="#articles" label="Explore Resources" />
          </AnchorLink>
        </TextContainer>
        {!isMobile && (
          <HeaderImage
            alt="Header"
            src={`${process.env.ASSET_PREFIX}/header-img.svg`}
          />
        )}
      </StyledContainer>
    </HeaderContainer>
  );
};
