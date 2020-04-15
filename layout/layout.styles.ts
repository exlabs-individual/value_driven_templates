import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
`;

export const LayoutBody = styled.div.attrs(
  ({ isMobile = false }: { isMobile?: boolean }) => ({
    isMobile,
  })
)`
  height: calc(100% - 62px);
  padding: ${(props) => (props.isMobile ? '20px' : '20px 40px')};
`;
