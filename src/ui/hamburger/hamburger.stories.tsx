import React from 'react';
import { Hambuerger } from './hamburger.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';

export default {
  title: 'Hamburger',
  component: Hambuerger,
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
      </ThemeProvider>
    ),
  ],
};

export const Opened = () => (
  <Hambuerger isOpen={true} onClick={() => {}} theme="secondary" />
);
export const Closed = () => (
  <Hambuerger isOpen={false} onClick={() => {}} theme="secondary" />
);
