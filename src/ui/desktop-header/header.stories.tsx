import React from 'react';
import { Header } from './header.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';

export default {
  title: 'Desktop Header',
  component: Header,
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <Header image="header-img" />;
