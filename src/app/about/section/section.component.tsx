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
}

export const Section = ({
  title,
  image,
  children,
  textPosition = 'right',
}: SectionProps) => {
  return (
    <StyledSection className="about-section">
      <SectionTitle>{title}</SectionTitle>
      <SectionContent textPosition={textPosition}>
        <SectionImage src={`${process.env.ASSET_PREFIX}/about/${image}.svg`} />
        <SectionText>{children}</SectionText>
      </SectionContent>
    </StyledSection>
  );
};
