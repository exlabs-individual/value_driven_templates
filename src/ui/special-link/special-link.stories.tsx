import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { SpecialLink } from './special-link.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme.config';

export default {
  title: 'Special Link',
  component: SpecialLink,
  decorators: [
    withKnobs,
    (story) => (
      <ThemeProvider theme={theme}>
        <div
          style={{ fontFamily: "'Montserrat', sans-serif", padding: '10px' }}
        >
          {story()}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Primary = () => (
  <SpecialLink href="#" label={text('label', 'Click me!')} />
);

export const Red = () => (
  <SpecialLink href="#" label={text('label', 'Click me!')} color="red" />
);
