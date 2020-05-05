import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;

  & > .article-aside {
    width: 90%;
    margin: 20px auto;
    box-shadow: 0p 3px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledHeader = styled.header`
  height: 300px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: inset 0px 340px 0px rgba(4, 74, 175, 0.65);
  color: ${({ theme }: ThemeProps) => theme.color.white};
  padding: 0 0 40px 60px;

  & > .category {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
  }

  & > .title {
    font-size: 39px;
    margin: 15px 0;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    padding: 0 20px 20px;
    height: 250px;

    & > .category {
      font-size: ${({ theme }: ThemeProps) => theme.fontSize.small};
    }

    & > .title {
      font-size: 23px;
      margin: 5px 0 20px;
    }
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;

  & .author__img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  & .author__name {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
  }

  & > .publish-date {
    margin-left: 20px;
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    & .author__img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }

    & .author__name {
      font-size: ${({ theme }: ThemeProps) => theme.fontSize.small};
    }

    & > .publish-date {
      margin-left: 10px;
      font-size: ${({ theme }: ThemeProps) => theme.fontSize.small};
    }
  }
`;

export const StyledContent = styled.section`
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }: ThemeProps) => theme.padding.medium};

  & > .article-aside {
    position: -webkit-sticky;
    position: sticky;
    top: 82px;
  }
`;

export const MarkdownContainer = styled.div`
  width: 70%;
  margin-right: 20px;

  & .article-aside {
    position: sticky;
    top: 82px;
  }

  color: ${({ theme }: ThemeProps) => theme.color.black};
  font-size: 16px;

  & > h1 {
    font-size: 41px;
  }

  & > h2 {
    font-size: 37px;
  }

  & > h3 {
    font-size: 31px;
  }

  & > h4 {
    font-size: 27px;
  }

  & > h5 {
    font-size: 23px;
  }

  & > h6 {
    font-size: 19px;
  }

  & > p {
    padding: 10px 0;
    font-size: 19px;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    width: 100%;
    margin-right: 0;
  }
`;
