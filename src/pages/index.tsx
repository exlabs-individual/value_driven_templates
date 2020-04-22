import React from 'react';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { LayoutBody } from '../layout/layout.styles';
import { ArticleList } from '../app/home/article-list/article-list.component';
import { Header as DesktopHeader } from '../ui/desktop-header/header.component';
import articles from '../content/articles.json';
import { ArticleThumbnailProps } from '../app/home/article-thumbnail/article-thumbnail.component';

const Home = () => {
  const { isMobile } = useDeviceDetect();

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

  return (
    <>
      {!isMobile && <DesktopHeader image={`header-img`} />}
      <LayoutBody isMobile={isMobile}>
        <ArticleList articles={allArticles} />
      </LayoutBody>
    </>
  );
};

export default Home;
