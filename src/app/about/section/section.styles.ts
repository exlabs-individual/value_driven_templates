import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }: ThemeProps) => theme.color.black};
  min-height: calc(100vh - 142px);

  padding: ${({ theme }: ThemeProps) => theme.padding.medium};

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    padding: ${({ theme }: ThemeProps) => theme.padding.small};
    min-height: calc(100vh - 104px);
  }
`;

export const SectionTitle = styled.h2`
  max-width: 40%;
  font-size: 40px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    font-size: 30px;
    max-width: 70%;
    margin-bottom: 20px;
  }
`;

export const SectionContent = styled.div.attrs(
  ({ textPosition }: { textPosition?: 'left' | 'right' }) => ({ textPosition })
)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.textPosition === 'left' ? 'row-reverse' : 'row'};
  width: 100%;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const SectionImage = styled.img`
  width: 40%;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) and (max-width: ${({
      theme,
    }: ThemeProps) => theme.deviceBreakpoint.tablet}) {
    width: 60%;
  }
`;

export const SectionText = styled.div`
  width: 55%;
  margin-left: 20px;
  font-size: 27px;
  font-weight: 300;

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    width: 100%;
    margin-left: 0;
    font-size: 19px;
  }

  @media (min-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) and (max-width: ${({
      theme,
    }: ThemeProps) => theme.deviceBreakpoint.tablet}) {
    width: 40%;
    font-size: 19px;
  }
`;
