import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from '../../../ui/header/header.component';
import {
  HeaderTitle,
  HeaderImage,
  HeaderSubtitle,
} from '../../../ui/header/header.styles';
import { SpecialLink } from '../../../ui/special-link/special-link.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

export const HowToContributeHeader = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <Header
      imageUrl={`${process.env.ASSET_PREFIX}/how-to-contribute/header.svg`}
    >
      <HeaderTitle>Sharing is caring.</HeaderTitle>
      {isMobile && (
        <HeaderImage
          alt="Header"
          src={`${process.env.ASSET_PREFIX}/about/header.svg`}
        />
      )}
      <HeaderSubtitle>
        Want to share your knowledge? You can learn here how.
      </HeaderSubtitle>
      <AnchorLink
        offset="100"
        href="#about-content"
        style={{ textDecoration: 'none' }}
      >
        <SpecialLink
          href="#how-to-contribute-content"
          label="I’m ready to share my knowledge!"
        />
      </AnchorLink>
    </Header>
  );
};
