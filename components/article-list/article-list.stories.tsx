import React from 'react';
import { ArticleList } from './article-list.component';

const testArticle = {
  title: 'Architecture Decision Record',
  category: 'Development',
  description:
    'Learn how to document important architectural decisions in your development team.',
  publishDate: new Date(),
  imageUrl:
    'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  authorImgUrl:
    'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
};

const articles = [...new Array(9).fill(testArticle)];

export default {
  title: 'Article list',
  component: ArticleList,
  decorators: [
    (story) => (
      <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
    ),
  ],
};

export const Default = () => <ArticleList articles={articles} />;
