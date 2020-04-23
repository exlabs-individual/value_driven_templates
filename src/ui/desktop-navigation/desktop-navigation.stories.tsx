import React from 'react';
import { DesktopNavigation } from './desktop-navigation.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';

export default {
  title: 'Desktop Navigation',
  component: DesktopNavigation,
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
      </ThemeProvider>
    ),
  ],
};

export const Secondary = () => <DesktopNavigation theme="secondary" />;

export const Primary = () => <DesktopNavigation theme="primary" />;
