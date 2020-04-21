import React from 'react';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { LayoutBody } from '../layout/layout.styles';
import { Header as DesktopHeader } from '../ui/desktop-header/header.component';
import { TitledContent } from '../ui/titled-content/titled-content.component';

const About = () => {
  const { isMobile, isDesktop } = useDeviceDetect();

  return (
    <>
      {!isMobile && <DesktopHeader image="about" />}
      <LayoutBody isMobile={isMobile} isDesktop={isDesktop}>
        <TitledContent title="About">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          rutrum blandit ultricies. Morbi interdum commodo cursus. Maecenas a
          tellus a arcu finibus tristique. Morbi venenatis faucibus massa.
          Mauris ac faucibus lectus. Praesent cursus, ligula in aliquet
          volutpat, purus metus pharetra quam, ut feugiat ex diam vehicula diam.
          Aliquam dui turpis, tempor accumsan ultrices varius, pulvinar ut
          metus. Mauris porttitor egestas lacinia. Curabitur elementum congue
          risus ut sodales. Phasellus augue risus, finibus ut erat ac, tristique
          finibus nibh. Phasellus vitae velit quis elit porta lacinia. Fusce at
          nisi nibh. Mauris et ultricies diam, in condimentum neque. Nullam
          dictum, tellus lobortis condimentum sagittis, metus eros dapibus nibh,
          at faucibus eros eros vitae diam. Duis placerat lorem nulla, eu
          imperdiet velit suscipit a. Morbi consequat dictum est, eu imperdiet
          nisl convallis sit amet. Nullam imperdiet tempor libero et elementum.
          Duis a ex id felis euismod faucibus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Morbi libero
          augue, sollicitudin ac fringilla in, laoreet non quam. Proin finibus
          turpis auctor magna faucibus, sit amet varius nunc euismod.
          Pellentesque ornare risus leo, sit amet rhoncus felis venenatis at.
        </TitledContent>
      </LayoutBody>
    </>
  );
};

export default About;
