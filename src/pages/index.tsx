import React from 'react';
import { useDeviceDetect } from '../hooks/use-device-detect/use-device-detect.hook';
import { LayoutBody } from '../layout/layout.styles';
import { ArticleList } from '../app/home/article-list/article-list.component';
import { Header as DesktopHeader } from '../ui/desktop-header/header.component';

const dummyArticle = {
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

const Home = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {!isMobile && <DesktopHeader image={`header-img`} />}
      <LayoutBody isMobile={isMobile}>
        <ArticleList articles={[...new Array(7).fill(dummyArticle)]} />
      </LayoutBody>
    </>
  );
};

export default Home;
