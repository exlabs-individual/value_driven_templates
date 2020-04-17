import React from 'react';
import { Author } from './author.component';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Author',
  component: Author,
  decorators: [
    withKnobs,
    (story) => (
      <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
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
