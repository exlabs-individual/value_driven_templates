import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  StyledHeader,
  InformationContainer,
  HeaderTitle,
  HeaderSubtitle,
  HeaderImage,
  StyledContainer,
} from './about-header.styles';
import { SpecialLink } from '../../../ui/special-link/special-link.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const AboutHeader = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <StyledHeader>
      <StyledContainer>
        <InformationContainer>
          <HeaderTitle>Hello, We are Exlabs.</HeaderTitle>
          {isMobile && (
            <HeaderImage
              src={`${process.env.ASSET_PREFIX}/about/header.svg`}
              alt="About header"
            />
          )}
          <HeaderSubtitle>
            We deliver high-level consultancy & flexible, complex data-driven
            software solutions for the companies of the future.
          </HeaderSubtitle>
          <AnchorLink
            offset="100"
            href="#about-content"
            style={{ textDecoration: 'none' }}
          >
            <SpecialLink
              href="#about-content"
              label="Read about Value Driven Engineering"
            />
          </AnchorLink>
        </InformationContainer>
        {!isMobile && (
          <HeaderImage
            src={`${process.env.ASSET_PREFIX}/about/header.svg`}
            alt="About header"
          />
        )}
      </StyledContainer>
    </StyledHeader>
  );
};
