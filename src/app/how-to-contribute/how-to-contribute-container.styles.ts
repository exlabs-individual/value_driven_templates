import styled from 'styled-components';
import { Container } from '../../ui/container/container.styles';
import { ThemeProps } from '../../theme/theme.config';

export const PageTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }: ThemeProps) => theme.padding.small};

  & > .styled-section:last-child {
    margin-bottom: 20px;

    & > .section-number {
      &::after {
        display: none;
      }
    }
  }
`;
