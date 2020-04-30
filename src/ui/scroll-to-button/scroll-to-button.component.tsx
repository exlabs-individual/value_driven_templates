import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { StyledButton } from './scroll-to-button.styles';

interface ScrollToButtonProps {
  label: string;
  href: string;
  offset?: string;
}

export const ScrollToButton = ({
  label,
  href,
  offset = '100',
}: ScrollToButtonProps) => {
  return (
    <AnchorLink offset={offset} href={href} style={{ textDecoration: 'none' }}>
      <StyledButton>{label}</StyledButton>
    </AnchorLink>
  );
};
