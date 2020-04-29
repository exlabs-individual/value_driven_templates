import React from 'react';
import {
  StyledSection,
  TextContainer,
  SectionTitle,
  SectionDescription,
  SectionNumber,
  SectionImage,
} from './information-section.styles';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';

interface InformationSectionProps {
  title: string;
  description: string;
  image: 'workspace' | 'content' | 'author' | 'approve';
  sectionNumber: number;
  id?: string;
}

export const InformationSection = ({
  title,
  description,
  image,
  sectionNumber,
  id,
}: InformationSectionProps) => {
  const { isMobile } = useDeviceDetect();

  const containerRef = React.createRef<HTMLDivElement>();
  const [containerHeight, setContainerHeight] = React.useState(0);
  const [isActive, setActive] = React.useState(false);

  const handleResize = React.useCallback(() => {
    setContainerHeight(containerRef.current?.offsetHeight);
  }, [containerRef]);

  const handleScroll = React.useCallback(() => {
    if (
      !isActive &&
      window.pageYOffset - sectionNumber * (containerHeight / 2) >
        containerRef.current?.getBoundingClientRect().top
    ) {
      setActive(true);
    }
  }, [containerRef, isActive, containerHeight, sectionNumber]);

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef]);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <StyledSection ref={containerRef} className="styled-section" id={id}>
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        {isMobile && (
          <SectionImage
            alt="Section"
            src={`${process.env.ASSET_PREFIX}/how-to-contribute/${image}.svg`}
          />
        )}
        <SectionDescription>{description}</SectionDescription>
      </TextContainer>
      <SectionNumber
        active={isActive}
        containerHeight={containerHeight}
        className="section-number"
      >
        {sectionNumber}
      </SectionNumber>
      {!isMobile && (
        <SectionImage
          alt="Section"
          src={`${process.env.ASSET_PREFIX}/how-to-contribute/${image}.svg`}
        />
      )}
    </StyledSection>
  );
};
