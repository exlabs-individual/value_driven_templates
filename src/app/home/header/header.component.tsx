import React from 'react';
import {
  HeaderContainer,
  TextContainer,
  HeaderImage,
  StyledContainer,
} from './header.styles';
import { SpecialLink } from '../../../ui/special-link/special-link.component';

export const Header = () => {
  return (
    <HeaderContainer className="header-container">
      <StyledContainer>
        <TextContainer>
          <h2 className="title">Value Driven Engineering</h2>
          <h3 className="sub-title">Powered by Exlabs</h3>
          <p className="additional-info">
            We deliver high-level consultancy & flexible, complex data-driven
            software solutions for the companies of the future
          </p>
          <SpecialLink href="#" label="Explore Resources" />
        </TextContainer>
        <HeaderImage
          alt="Header"
          src={`${process.env.ASSET_PREFIX}/header-img.svg`}
        />
      </StyledContainer>
    </HeaderContainer>
  );
};
