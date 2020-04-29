import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }: ThemeProps) => theme.color.black};

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.tablet}) {
    flex: 3;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.tablet}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 49px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.tablet}) {
    font-size: 34px;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    font-size: 23px;
  }
`;

export const SectionDescription = styled.p`
  font-size: 21px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    font-size: 15px;
  }
`;

export const SectionImage = styled.img`
  width: 40%;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    margin-bottom: 30px;
    width: 60%;
  }
`;

export const SectionNumber = styled.h3.attrs(
  ({
    containerHeight,
    active = false,
  }: {
    containerHeight: number;
    active?: boolean;
  }) => ({ containerHeight, active })
)`
  top: -300px;
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  text-align: center;
  line-height: 100px;
  color: ${({ theme }: ThemeProps) => theme.color.white};
  background-color: ${({ theme, active }: ThemeProps & { active: boolean }) =>
    active ? theme.color.primary : '#EBEBEB'};
  border-radius: 50%;
  margin: 0 20px;
  position: relative;
  font-size: 37px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.tablet}) {
    min-width: 70px;
    min-height: 70px;
    max-width: 70px;
    max-height: 70px;

    font-size: 30px;
    line-height: 70px;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    margin-left: 0;
    top: 0;

    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;

    font-size: 23px;
    line-height: 50px;
  }

  ${(props) =>
    props.active &&
    `
  animation: setColor 1.5s 1 0s linear;
  `}

  @keyframes setColor {
    0% {
      background: #ebebeb;
    }
    100% {
      background: #044aaf;
    }
  }

  &::after {
    content: '';
    display: block;
    width: 6px;
    height: ${(props) => `${props.active ? props.containerHeight - 100 : 0}px`};
    background-color: ${({ theme, active }: ThemeProps & { active: boolean }) =>
      active ? theme.color.primary : '#EBEBEB'};
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    transition: height 2s ease;

    @media (max-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.tablet}) {
      top: 70px;
      height: ${(props) =>
        `${props.active ? props.containerHeight - 70 : 0}px`};
    }

    @media (max-width: ${({ theme }: ThemeProps) =>
        theme.deviceBreakpoint.tablet}) {
      top: 50px;
      width: 3px;
      height: ${(props) =>
        `${props.active ? props.containerHeight - 50 : 0}px`};
    }

    ${(props) =>
      props.active &&
      `
  animation: setColor 1.5s 1 0s linear;
  `}
  }
`;
