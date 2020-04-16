import React from 'react';
import { Layout } from './layout.styles';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { Header as MobileHeader } from '../components/mobile/header/header.component';
import { MobileMenuStateProvider } from '../providers/mobile-menu.provider';
import { Menu } from '../components/mobile/menu/menu.component';
import { Header as DesktopHeader } from '../components/desktop/header/header.component';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useDeviceDetect();

  return (
    <Layout>
      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #f9f9f9;
            position: fixed;
            width: 100%;
            top: 0px;
            min-height: 100%;
            height: 100%;
            overflow: scroll;
            -webkit-overflow-scrolling: touch;
          }
        `}
      </style>

      <React.Fragment>
        {isMobile ? (
          <MobileMenuStateProvider>
            <React.Fragment>
              <MobileHeader />
              <Menu />
              <div>{children}</div>
            </React.Fragment>
          </MobileMenuStateProvider>
        ) : (
          <div>
            <DesktopHeader />
            <div>{children}</div>
          </div>
        )}
      </React.Fragment>
    </Layout>
  );
};
