import React from 'react';
import {
  StyledHeader,
  StyledContainer,
  HeaderImage,
  TextContainer,
} from './header.styles';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';

interface HeaderProps {
  children: React.ReactNode;
  imageUrl: string;
}

export const Header = ({ children, imageUrl }: HeaderProps) => {
  const { isMobile } = useDeviceDetect();
  return (
    <StyledHeader>
      <StyledContainer>
        <TextContainer>{children}</TextContainer>
        {!isMobile && <HeaderImage alt="Header" src={imageUrl} />}
      </StyledContainer>
    </StyledHeader>
  );
};
