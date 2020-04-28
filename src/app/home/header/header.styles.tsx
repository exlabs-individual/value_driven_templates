import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';
import { Container } from '../../../ui/container/container.styles';

export const HeaderContainer = styled.section`
  padding: 10px ${({ theme }: ThemeProps) => theme.padding.small};

  @media (min-width: 1200px) {
    height: calc(100vh - 112px);
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 40%;
  color: ${({ theme }: ThemeProps) => theme.color.black};

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  & > .title {
    font-size: 65px;
    margin: 0;

    @media (max-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.tablet}) {
      font-size: 49px;
    }

    @media (max-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.desktop}) {
      font-size: 37px;
      text-align: center;
    }
  }

  & > .sub-title {
    margin: 0;
    margin-top: 5px;
    font-weight: 500;
    font-size: 30px;

    @media (max-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.desktop}) {
      font-size: 17px;
    }
  }

  & > .additional-info {
    display: block;
    margin: 60px 0 50px;
    font-weight: 500;
    max-width: 85%;
    font-size: 26px;

    @media (max-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.mobile}) {
      font-size: 19px;
      text-align: center;

      margin: 0 0 20px;
    }

    @media (max-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.desktop}) {
      margin: 40px 0 50px;
    }

    &::before {
      content: '';
      display: inline-block;
      margin-right: 10px;
      height: 2px;
      width: 30px;
      background-color: ${({ theme }: ThemeProps) => theme.color.black};
      margin-bottom: 5px;
    }
  }

  & > .special-link {
    display: inline-block;

    @media (min-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.desktop}) {
      padding: 15px 30px;
    }
  }
`;

export const HeaderImage = styled.img`
  width: 60%;
`;
