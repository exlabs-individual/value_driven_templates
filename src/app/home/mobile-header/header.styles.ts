import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(90deg, #044aaf, #022558);
  width: calc(100% - 40px);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 999;
`;

export const MenuContainer = styled.div`
  & > .menu-btn {
    background-color: inherit;
    border: 0;
    outline: none;
  }
`;
