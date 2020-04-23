import React from 'react';
import { ArticleThumbnail } from '../article-thumbnail/article-thumbnail.component';
import { useDeviceDetect } from '../../../hooks/use-device-detect/use-device-detect.hook';
import { MobileList, DesktopList } from './article-list.styles';
import { ArticleThumbnailProps } from '../article-thumbnail/article-thumbnail.component';

interface ArticleListProps {
  articles: ArticleThumbnailProps[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  const articleList = (
    <React.Fragment>
      {articles.map((article, index) => (
        <ArticleThumbnail key={`article-${index}`} {...article} />
      ))}
    </React.Fragment>
  );

  const { isMobile } = useDeviceDetect();
  return (
    <React.Fragment>
      {isMobile ? (
        <MobileList className="article-list--small">{articleList}</MobileList>
      ) : (
        <DesktopList className="article-list--big" id="articles">
          {articleList}
        </DesktopList>
      )}
    </React.Fragment>
  );
};
