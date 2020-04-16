import React from 'react';
import { LogoContainer } from './logo.styles';

export const Logo = () => {
  return (
    <LogoContainer className="logo-container">
      <img
        className="logo-img"
        src={`${process.env.ASSET_PREFIX}/logo-small.svg`}
        alt="Logo"
      />
      <span className="logo-separator"></span>
      <h1 className="logo-text">value reader.</h1>
    </LogoContainer>
  );
};
