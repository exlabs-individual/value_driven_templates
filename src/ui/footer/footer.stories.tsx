import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';
import { Footer } from './footer';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <Footer />;
