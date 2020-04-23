import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';
import { Container } from '../../../ui/container/container.styles';

export const HeaderContainer = styled.section`
  padding: 10px ${({ theme }: ThemeProps) => theme.padding.small};

  @media (min-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.desktop}) {
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

  & > .title {
    font-size: 49px;
    margin: 0;
  }

  & > .sub-title {
    margin: 0;
    margin-top: 5px;
    font-weight: 500;
    font-size: 21px;
  }

  & > .additional-info {
    display: block;
    margin: 40px 0 50px;
    font-weight: 500;
    max-width: 85%;

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
  }
`;

export const HeaderImage = styled.img`
  width: 60%;
`;
