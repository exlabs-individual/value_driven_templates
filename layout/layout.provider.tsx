import React from "react";
import { Layout } from "./layout.styles";
import { useDeviceDetect } from "../hooks/use-device-detect/use-device-detect.hook";
import { Header } from "../components/mobile/header/header.component";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isDesktop } = useDeviceDetect();

  return (
    <div>
      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: "Montserrat", sans-serif;
          }
        `}
      </style>
      <React.Fragment>
        {isMobile && (
          <div>
            <Header />
            <div>{children}</div>
          </div>
        )}
        {isDesktop && (
          <div>
            <div>DESKTOP</div>
            <div>{children}</div>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};
