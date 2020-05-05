import React from 'react';
import { Header } from '../../../ui/header/header.component';
import {
  HeaderTitle,
  HeaderImage,
  HeaderSubtitle,
} from '../../../ui/header/header.styles';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { ScrollToButton } from '../../../ui/scroll-to-button/scroll-to-button.component';

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
          src={`${process.env.ASSET_PREFIX}/how-to-contribute/header.svg`}
        />
      )}
      <HeaderSubtitle>
        Want to share your knowledge? You can learn here how.
      </HeaderSubtitle>
      <ScrollToButton
        href="#how-to-contribute-content"
        label="I’m ready to share my knowledge!"
      />
    </Header>
  );
};
