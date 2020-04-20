import React from 'react';
import { Author } from './author.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';

export default {
  title: 'Author',
  component: Author,
  decorators: [
    withKnobs,
    (story) => (
      <ThemeProvider theme={theme}>
        <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
      </ThemeProvider>
    ),
  ],
};

export const Default = () => (
  <Author
    imageUrl={text(
      'authorImageUrl',
      'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    )}
  />
);
