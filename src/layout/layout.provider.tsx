import React from 'react';
import { Layout } from './layout.styles';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { Header as MobileHeader } from '../app/home/mobile-header/header.component';
import { Menu } from '../ui/mobile-menu/menu.component';
import { Header as DesktopHeader } from '../app/home/desktop-header/header.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme.config';
import { useMobileMenuState } from '../hooks/use-mobile-menu/use-mobile-menu.hook';

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
          {isMobile ? (
            <React.Fragment>
              <MobileHeader />
              {isVisible && <Menu />}
              <div>{children}</div>
            </React.Fragment>
          ) : (
            <div>
              <DesktopHeader />
              <div>{children}</div>
            </div>
          )}
        </React.Fragment>
      </ThemeProvider>
    </Layout>
  );
};
