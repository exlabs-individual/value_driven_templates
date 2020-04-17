import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  & > .author__img {
    width: 30px;
    height: 30px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    background-color: ${({ theme }: ThemeProps) => theme.color.primary};
  }

  & > .author__name {
    margin-left: 10px;
    font-weight: 500;
    font-size: 14px;
  }
`;
