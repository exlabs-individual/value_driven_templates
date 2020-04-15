import React from 'react';
import { Layout } from './layout.styles';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { Header } from '../components/mobile/header/header.component';
import { MobileMenuStateProvider } from '../providers/mobile-menu.provider';
import { Menu } from '../components/mobile/menu/menu.component';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isDesktop } = useDeviceDetect();

  return (
    <Layout>
      <style jsx global>
        {`
          html,
          body {
            -webkit-overflow-scrolling: touch;
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #f9f9f9;
            position: fixed;
            width: 100%;
            top: 0px;
            height: 100%;
            overflow: scroll;
          }
        `}
      </style>
      <React.Fragment>
        {isMobile && (
          <MobileMenuStateProvider>
            <Header />
            <Menu />
            <div>{children}</div>
          </MobileMenuStateProvider>
        )}
        {isDesktop && (
          <div>
            <div>DESKTOP</div>
            <div>{children}</div>
          </div>
        )}
      </React.Fragment>
    </Layout>
  );
};
