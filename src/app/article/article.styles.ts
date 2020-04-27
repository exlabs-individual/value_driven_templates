import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
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
  padding: 20px 60px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    padding: 20px;
  }
`;