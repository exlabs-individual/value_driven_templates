import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  & > .logo-img {
    width: 30px;
    height: 30px;
  }

  & > .logo-separator {
    width: 2px;
    height: 32px;
    background-color: #ffffff;
    margin: 0 10px;
  }

  & > .logo-text {
    font-size: 21px;
    margin: 0;
    color: #ffffff;
    font-weight: 700;
  }
`;
