import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const StyledButton = styled.button`
  background-color: ${({ theme }: ThemeProps) => theme.color.primary};
  color: ${({ theme }: ThemeProps) => theme.color.white};
  padding: 10px 20px;
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: ${({ theme }: ThemeProps) => theme.defaultRadius};
`;
