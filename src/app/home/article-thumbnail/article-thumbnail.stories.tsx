import React from 'react';
import { ArticleThumbnail } from './article-thumbnail.component';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme.config';

export default {
  title: 'Article thumbnail',
  component: ArticleThumbnail,
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
  <ArticleThumbnail
    title={text('title', 'Architecture Decision Record')}
    category={text('category', 'Development')}
    description={text(
      'description',
      'Learn how to document important architectural decisions in your development team.'
    )}
    publishDate={new Date()}
    imageUrl={text(
      'imageUrl',
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
    )}
    authorImgUrl={text(
      'authorImageUrl',
      'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    )}
  />
);
