import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(90deg, #044aaf, #022558);
  width: calc(100% - 40px);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

export const MenuContainer = styled.div`
  & > .menu-btn {
    background-color: inherit;
    border: 0;
    outline: none;
  }
`;
