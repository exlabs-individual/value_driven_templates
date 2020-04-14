import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f9f9f9;
`;

export const LayoutBody = styled.div.attrs(
  ({ isMobile = false }: { isMobile?: boolean }) => ({
    isMobile,
  })
)`
  padding: ${(props) => (props.isMobile ? '20px' : '20px 40px')};
`;
