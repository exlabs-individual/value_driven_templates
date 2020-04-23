import React from 'react';
import { Home } from './home-container.styles';
import { ArticleThumbnailProps } from './article-thumbnail/article-thumbnail.component';
import { Container } from '../../ui/container/container.styles';
import { ArticleList } from './article-list/article-list.component';
import { Header } from './header/header.component';

interface HomeContainerProps {
  articles: ArticleThumbnailProps[];
}

export const HomeContainer = ({ articles }: HomeContainerProps) => {
  return (
    <Home>
      <Header />
      <Container>
        <ArticleList articles={articles} />
      </Container>
    </Home>
  );
};
