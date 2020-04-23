import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const StyledArticle = styled.article``;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PaddingContainer = styled.div`
  padding: 0 40px;
`;

export const StyledHeader = styled.header`
  background-position: center;
  background-size: cover;
  height: 250px;
  box-shadow: inset 0 250px 0 rgba(4, 74, 175, 0.55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  & > .article-title {
    color: ${({ theme }: ThemeProps) => theme.color.white};
    font-size: 37px;

    margin: 0;
  }
`;

export const InformationContainer = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 1px solid #ccc;
`;

export const ContentSection = styled.section``;

export const StyledFooter = styled.footer``;
