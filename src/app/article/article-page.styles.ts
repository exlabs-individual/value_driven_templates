import styled from 'styled-components';
import { Container } from '../../ui/container/container.styles';
import { ThemeProps } from '../../theme/theme.config';

export const StyledContainer = styled(Container)`
  & > .article {
    margin: 20px 0;
  }

  @media (max-width: ${({ theme }: ThemeProps) =>
      theme.deviceBreakpoint.mobile}) {
    & > .article {
      margin: 0;
    }
  }
`;
