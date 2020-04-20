import React from 'react';
import {
  Container,
  ContainerHeader,
  ContainerContent,
} from './titled-content.styles';

interface TitledContentProps {
  title: string;
  children: React.ReactNode;
}

export const TitledContent = ({ title, children }: TitledContentProps) => {
  return (
    <Container className="titled-content">
      <ContainerHeader>
        <h2 className="title">{title}</h2>
      </ContainerHeader>
      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
};
