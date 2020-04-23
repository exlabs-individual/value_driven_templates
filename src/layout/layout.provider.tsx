import React from 'react';
import { Layout, BodyContainer } from './layout.styles';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { Header as MobileHeader } from '../ui/mobile-header/header.component';
import { Menu } from '../ui/mobile-menu/menu.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme.config';
import { useMobileMenuState } from '../hooks/use-mobile-menu/use-mobile-menu.hook';
import { Footer } from '../ui/footer/footer.component';
import { DesktopNavigation } from '../ui/desktop-navigation/desktop-navigation.component';
import { useStickyNav } from '../hooks/use-sticky-nav/use-sticky-nav.hook';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useDeviceDetect();
  const {
    state: { isVisible },
  } = useMobileMenuState();
  const stickyRef = React.useRef(null);

  const isStickyNav = useStickyNav({ stickyRef });

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
                {isStickyNav && (
                  <div style={{ width: '100%', height: '72px' }}></div>
                )}
                <DesktopNavigation
                  theme={isStickyNav ? 'primary' : 'secondary'}
                  isSticky={isStickyNav}
                />
                <div ref={stickyRef}>{children}</div>
              </div>
            )}
          </BodyContainer>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    </Layout>
  );
};
