import window from "global";
import React from "react";

interface DeviceDetectData {
  isMobile: boolean;
  isDesktop: boolean;
}

export const useDeviceDetect = () => {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = React.useState(getSize);
  const [deviceData, setDeviceData] = React.useState<DeviceDetectData>({
    isDesktop: true,
    isMobile: false,
  });

  React.useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (windowSize.width <= 768) {
      setDeviceData({
        isMobile: true,
        isDesktop: false,
      });
    } else {
      setDeviceData({
        isMobile: false,
        isDesktop: true,
      });
    }
  }, [windowSize.width]);

  return deviceData;
};
