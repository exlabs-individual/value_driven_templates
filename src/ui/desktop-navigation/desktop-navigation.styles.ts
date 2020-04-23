import styled from 'styled-components';
import { ThemeType, ThemedProps } from '../../../types';
import { ThemeProps } from '../../theme/theme.config';
import { Container } from '../container/container.styles';

export const NavigationContainer = styled.header.attrs(
  ({
    themeType = 'primary',
    isSticky = false,
  }: {
    themeType?: ThemeType;
    isSticky?: boolean;
  }) => ({
    themeType,
    isSticky,
  })
)`
  background-color: ${({
    theme,
    themeType,
  }: ThemedProps & { isSticky?: boolean }) =>
    themeType === 'primary' ? theme.color.primary : 'inherit'};
  padding: 10px ${({ theme }: ThemeProps) => theme.padding.small};
  animation: moveUp 0.3s ease-in-out;

  ${(props) =>
    props.isSticky &&
    `
      position: fixed;
      top: 0;
      left: 0;
      width: calc(100% - 40px);
      z-index: 999;
      animation: moveDown 0.5s ease-in-out;
  `}

  @keyframes moveUp {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }

  @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const StyledNav = styled.nav``;

export const StyledList = styled.ul.attrs(
  ({ themeType = 'primary' }: { themeType?: ThemeType }) => ({
    themeType,
  })
)`
  list-style: none;
  display: flex;

  & .nav-item {
    margin-right: 20px;

    &__link {
      color: ${({ theme, themeType }: ThemedProps) =>
        themeType === 'primary' ? theme.color.white : theme.color.black};
      text-decoration: none;
      font-size: ${({ theme }: ThemeProps) => theme.fontSize.medium};
      font-weight: 700;
    }
  }

  & > .nav-item:last-child {
    margin-right: 0;
  }
`;
