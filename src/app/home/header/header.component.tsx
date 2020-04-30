import React from 'react';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { Header as HeaderContainer } from '../../../ui/header/header.component';
import {
  HeaderTitle,
  HeaderSubtitle,
  HeaderImage,
} from '../../../ui/header/header.styles';
import { ScrollToButton } from '../../../ui/scroll-to-button/scroll-to-button.component';

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
      <ScrollToButton href="#articles" label="Explore Resources" />
    </HeaderContainer>
  );
};
