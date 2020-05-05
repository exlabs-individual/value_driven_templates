import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';

export const StyledNav = styled.nav``;

export const StyledList = styled.ul``;

export const StyledListItem = styled.li`
  padding: 10px ${({ theme }: ThemeProps) => theme.padding.small};
`;

export const StyledLink = styled.a`
  display: block;
  width: calc(100% - 20px);
  height: 100%;
  text-decoration: none;
  color: ${({ theme }: ThemeProps) => theme.color.white};
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
  padding: 10px;
  border-bottom: 1px solid ${({ theme }: ThemeProps) => theme.color.white};
  font-weight: 500;
`;
