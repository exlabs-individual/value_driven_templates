import React from 'react';
import { StyledImage } from './image.styles';

interface ImageProps {
  src: string;
}

export const Image = ({ src }: ImageProps) => {
  return <StyledImage src={src} />;
};
