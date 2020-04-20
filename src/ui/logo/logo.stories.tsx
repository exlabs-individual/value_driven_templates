import React from 'react';
import { Logo } from './logo.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';

export default {
  title: 'Logo',
  component: Logo,
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            backgroundColor: '#044AAF',
            width: 'fit-content',
          }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <Logo />;
