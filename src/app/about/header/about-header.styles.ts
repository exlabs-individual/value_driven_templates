import styled from 'styled-components';
import { Container } from '../../../ui/container/container.styles';
import { ThemeProps } from '../../../theme/theme.config';

export const StyledHeader = styled.header`
  height: calc(100vh - 62px);
  color: ${({ theme }: ThemeProps) => theme.color.black};
  padding: 10px ${({ theme }: ThemeProps) => theme.padding.small};

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.tablet}) {
    height: auto;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    height: 100vh;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const InformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 50px;

  & .special-link {
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    width: 100%;
    margin-right: 0;
    align-items: center;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    & .special-link {
      display: block;
      height: 25px;
      line-height: 25px;
      font-size: 14px;
    }
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 65px;
  margin-top: 130px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    font-size: 28px;
    margin-top: 10px;
  }
`;

export const HeaderSubtitle = styled.h3`
  font-size: 30px;
  font-weight: 300;
  margin: 20px 0 70px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    font-size: 19px;
    text-align: center;

    margin: 0 0 20px;
  }
`;

export const HeaderImage = styled.img`
  width: 50%;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.tablet}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    width: 80%;
  }
`;
