import styled from 'styled-components';
import { ThemeProps } from '../../theme/theme.config';

export const StyledFooter = styled.footer.attrs(
  ({ isMobile = false }: { isMobile?: boolean }) => ({
    isMobile,
  })
)`
  background: linear-gradient(90deg, #044aaf, #022558);
  color: ${({ theme }: ThemeProps) => theme.color.white};
  padding: ${(props) => (props.isMobile ? '15px 20px' : '20px 60px')};
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;

  & > .about-container {
    font-size: ${(props) => (props.isMobile ? '15px' : '19px')};
  }

  & > .copyright {
    font-size: ${(props) => (props.isMobile ? '13px' : '15px')};
    margin-top: 5px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  & > .title {
    font-weight: 700;
    margin-right: 5px;
  }

  & > .link {
    margin-left: 5px;
    color: ${({ theme }: ThemeProps) => theme.color.white};
    text-decoration: none;
    display: flex;
    align-items: center;

    & > .logo-img {
      margin-right: 5px;
    }
  }
`;
