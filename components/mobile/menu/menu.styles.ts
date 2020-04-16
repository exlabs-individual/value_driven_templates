import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  height: calc(100vh - 63px);
  border-top: 1px solid #ededed;
  background-color: #044aaf;
  position: sticky;
  position: -webkit-sticky;
  top: 62px;
  z-index: 999;
  overflow: hidden;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 10px 20px;

  & > li:last-child {
    margin-bottom: 0;
  }
`;

export const StyledListItem = styled.li`
  border-bottom: 1px solid #ffffff;
  margin-bottom: 30px;
  font-size: 19px;
  padding-bottom: 10px;

  & > a {
    color: #ffffff;
    text-decoration: none;
  }
`;
