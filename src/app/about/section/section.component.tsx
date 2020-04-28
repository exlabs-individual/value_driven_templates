import React from 'react';
import {
  StyledSection,
  SectionTitle,
  SectionContent,
  SectionImage,
  SectionText,
} from './section.styles';

interface SectionProps {
  title: string;
  image: 'about' | 'values' | 'sharing';
  children: React.ReactNode;
  textPosition?: 'left' | 'right';
  id?: string;
}

export const Section = ({
  title,
  image,
  children,
  textPosition = 'right',
  id,
}: SectionProps) => {
  return (
    <StyledSection className="about-section" id={id ?? ''}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent textPosition={textPosition}>
        <SectionImage
          src={`${process.env.ASSET_PREFIX}/about/${image}.svg`}
          alt={`${image} section`}
        />
        <SectionText>{children}</SectionText>
      </SectionContent>
    </StyledSection>
  );
};
