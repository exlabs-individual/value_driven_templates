import React from 'react';
import { getAllArticlesIds, getArticleData } from '../../lib/articles';
import { Article } from '../../app/article/article.component';

const ArticleContainer = ({ article }) => {
  return (
    <>
      <Article {...article} publishDate={new Date(article.updatedAt)} />
    </>
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
