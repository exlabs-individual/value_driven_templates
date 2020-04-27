import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const StyledAbout = styled.div`
  & > .about-section {
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #ebebeb;
      margin-bottom: 30px;
    }
  }

  & > .about-section:first-child {
    &::before {
      content: '';
      display: none;
    }
  }
`;

export const ContributionText = styled.p`
  margin-top: 20px;
  font-weight: 700;

  & > a {
    text-decoration: none;
    color: ${({ theme }: ThemeProps) => theme.color.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }: ThemeProps) => theme.color['dark-primary']};
    }
  }
`;
