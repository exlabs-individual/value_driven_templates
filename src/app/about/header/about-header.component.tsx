import React from 'react';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { Header } from '../../../ui/header/header.component';
import {
  HeaderImage,
  HeaderTitle,
  HeaderSubtitle,
} from '../../../ui/header/header.styles';
import { ScrollToButton } from '../../../ui/scroll-to-button/scroll-to-button.component';

export const AboutHeader = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <Header imageUrl={`${process.env.ASSET_PREFIX}/about/header.svg`}>
      <HeaderTitle>Hello, We are Exlabs.</HeaderTitle>
      {isMobile && (
        <HeaderImage
          alt="Header"
          src={`${process.env.ASSET_PREFIX}/about/header.svg`}
        />
      )}
      <HeaderSubtitle>
        We deliver high-level consultancy & flexible, complex data-driven
        software solutions for the companies of the future.
      </HeaderSubtitle>
      <ScrollToButton href="#about-content" label="Read more about VDE" />
    </Header>
  );
};
