import styled from 'styled-components';
import { theme, ThemeProps } from '../../theme/theme.config';

type ColorType = 'primary' | 'red';

const linkColorMap: { [key in ColorType]: string } = {
  primary: theme.color.primary,
  red: theme.color.red,
};

const hoverLinkColorMap: { [key in ColorType]: string } = {
  primary: theme.color['dark-primary'],
  red: theme.color['dark-red'],
};

export const StyledLink = styled.a.attrs(
  ({ color = 'primary' }: { color?: 'primary' | 'red' }) => ({ color })
)`
  background-color: ${(props) => linkColorMap[props.color]};
  color: ${({ theme }: ThemeProps) => theme.color.white};
  text-decoration: none;
  padding: 10px 20px;
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
  font-weight: 500;
  border-radius: ${({ theme }: ThemeProps) => theme.defaultRadius};
  transition: ${({ theme }: ThemeProps) =>
    theme.transitionValue('background-color')};

  &:hover {
    background-color: ${(props) => hoverLinkColorMap[props.color]};
  }
`;
