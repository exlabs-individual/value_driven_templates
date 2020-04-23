import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const Home = styled.section`
  padding: 10px ${({ theme }: ThemeProps) => theme.padding.small};

  & > .header-container {
    margin-top: 40px;
  }

  & .article-list--big {
    margin-top: 30px;
  }
`;
