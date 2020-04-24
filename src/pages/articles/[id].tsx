import React from 'react';
import { getAllArticlesIds, getArticleData } from '../../lib/articles';
import { Article } from '../../app/article/article.component';
import { StyledContainer } from '../../app/article/article-page.styles';

const ArticleContainer = ({ article }) => {
  return (
    <StyledContainer>
      <Article {...article} publishDate={new Date(article.updatedAt)} />
    </StyledContainer>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllArticlesIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const article = getArticleData(params.id);

  return {
    props: {
      article,
    },
  };
};

export default ArticleContainer;
