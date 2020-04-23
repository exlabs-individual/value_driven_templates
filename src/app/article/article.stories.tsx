import React from 'react';
import { Article } from './article.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';

export default {
  title: 'Article',
  component: Article,
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => (
  <Article content="" imageUrl="" publishDate={new Date()} title="" />
);
