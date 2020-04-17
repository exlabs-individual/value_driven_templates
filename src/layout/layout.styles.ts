import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LayoutBody = styled.div.attrs(
  ({ isMobile = false }: { isMobile?: boolean }) => ({
    isMobile,
  })
)`
  padding: ${(props) => (props.isMobile ? '20px 10px' : '20px 40px')};
`;
