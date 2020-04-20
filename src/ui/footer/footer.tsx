import React from 'react';
import { StyledFooter, AboutContainer } from './footer.styles';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';

export const Footer = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <StyledFooter isMobile={isMobile}>
      <AboutContainer className="about-container">
        <span className="title">Value Driven Engineering</span> by
        <a
          href="https://exlabs.com"
          className="link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="logo-img"
            src={`${process.env.ASSET_PREFIX}/logo-small.svg`}
            alt="Logo"
          />
          exlabs
        </a>
      </AboutContainer>
      <div className="copyright">Copyright &copy; 2020 EXLABS Ltd.</div>
    </StyledFooter>
  );
};
