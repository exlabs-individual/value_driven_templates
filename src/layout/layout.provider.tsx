import React from 'react';
import { Layout, BodyContainer } from './layout.styles';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { Header as MobileHeader } from '../ui/mobile-header/header.component';
import { Menu } from '../ui/mobile-menu/menu.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme.config';
import { useMobileMenuState } from '../hooks/use-mobile-menu/use-mobile-menu.hook';
import { Footer } from '../ui/footer/footer';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useDeviceDetect();
  const {
    state: { isVisible },
  } = useMobileMenuState();

  return (
    <Layout>
      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', 'Open Sans', sans-serif;
            background-color: #f9f9f9;
            -webkit-overflow-scrolling: touch;
          }
        `}
      </style>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <BodyContainer>
            {isMobile ? (
              <React.Fragment>
                <MobileHeader />
                {isVisible && <Menu />}
                <div>{children}</div>
              </React.Fragment>
            ) : (
              <div>
                <div>{children}</div>
              </div>
            )}
          </BodyContainer>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    </Layout>
  );
};
