import styled from 'styled-components';
import { ThemeProps } from '../../../theme/theme.config';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 60px 40px;
  color: ${({ theme }: ThemeProps) => theme.color.white};
`;

export const Background = styled.div`
  background: linear-gradient(90deg, #044aaf, #022558);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

export const StyledNav = styled.nav`
  & > .nav-list {
    list-style: none;
    display: flex;
    align-items: center;

    & > .nav-item {
      z-index: 2;
      margin-left: 30px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      & > a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: ${({ theme }: ThemeProps) => theme.color.white};
        }
      }

      &--primary {
        background-color: ${({ theme }: ThemeProps) => theme.color.red};
        padding: 10px 30px;
        border-radius: 4px;
        transition: background-color 0.2s ease;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

        & > a {
          color: ${({ theme }: ThemeProps) => theme.color.white};
        }

        &:hover {
          background-color: ${({ theme }: ThemeProps) =>
            theme.color['dark-red']};
        }
      }
    }

    & > .nav-item:first-child {
      margin-left: 0px;
    }
  }
`;

export const HeaderTopbar = styled.div`
  display: flex;
  justify-content: space-between;

  & > .logo-container {
    z-index: 2;
    & > .logo-img {
      width: 35px;
      height: 35px;
    }

    & > .logo-separator {
      height: 37px;
    }

    & > .logo-text {
      font-size: 24px;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: flex-start;
  padding: 0 50px;
  margin-top: 30px;
`;

export const TitleContainer = styled.div`
  & > .title {
    font-size: 37px;
    margin: 0;
  }

  & > .sub-title {
    margin: 0;
    font-size: 21px;
    font-weight: 500;
    margin-top: 10px;
  }

  & > .about-company {
    margin-top: 50px;
    max-width: 90%;
    font-size: 19px;
    display: flex;
    align-items: flex-start;
    padding: 0;

    &::before {
      content: '';
      width: 70px;
      height: 2px;
      background-color: ${({ theme }: ThemeProps) => theme.color.white};
      display: block;
      margin: 7px 10px 0 0;
    }
  }
`;

export const HeaderImage = styled.img`
  width: 40%;
`;
