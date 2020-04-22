import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';

export const StyledArticleThumbnail = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-width: 450px;
`;

export const ThumbnailContent = styled.div`
  padding: 30px 10px 20px;

  & > .article-title {
    margin: 0 0 10px;
    font-size: 21px;
    text-transform: uppercase;
  }

  & > .article-date {
    font-size: 14px;
    font-weight: 300;
  }

  & > .article-description {
    font-size: 17px;
    padding: 0;
    margin: 10px 0 20px;
  }
`;

export const ThumbnailImage = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 200px;
  max-height: 40%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;

  & > .category {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
    background-color: rgba(4, 74, 175, 0.9);
    color: ${({ theme }: ThemeProps) => theme.color.white};
    padding: 5px 20px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const ThumbnailFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbnailButton = styled.a`
  background-color: ${({ theme }: ThemeProps) => theme.color.red};
  color: ${({ theme }: ThemeProps) => theme.color.white};
  text-decoration: none;
  padding: 7px 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`;
