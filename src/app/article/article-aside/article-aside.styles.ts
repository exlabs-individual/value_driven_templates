import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';

export const StyledArticle = styled.article`
  height: 300px;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px 300px 0px rgba(4, 74, 175, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  color: ${({ theme }: ThemeProps) => theme.color.white};
`;

export const InformationText = styled.p`
  font-weight: 500;
  font-size: 31px;
  text-align: center;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
`;

export const LearnMoreLink = styled.a`
  color: ${({ theme }: ThemeProps) => theme.color.white};
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 30px;
  border-radius: 4px;
  transition: ${({ theme }: ThemeProps) =>
    theme.transitionValue('background-color')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
