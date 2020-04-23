import React from 'react';
import articles from '../content/articles.json';
import { ArticleThumbnailProps } from '../app/home/article-thumbnail/article-thumbnail.component';
import { HomeContainer } from '../app/home/home-container.component';

const Home = () => {
  const allArticles = React.useMemo<ArticleThumbnailProps[]>(
    () =>
      articles
        .sort(
          (a, b) =>
            Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt))
        )
        .map(({ updatedAt, fileName, ...data }) => ({
          ...data,
          publishDate: new Date(updatedAt),
          url: `/articles/${fileName}`,
        })),
    []
  );

  return <HomeContainer articles={allArticles} />;
};

export default Home;
