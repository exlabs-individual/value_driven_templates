import React from 'react';
import {
  StyledArticleThumbnail,
  ThumbnailImage,
  ThumbnailContent,
  ThumbnailFooter,
} from './article-thumbnail.styles';
import { Author } from '../../../ui/author/author.component';
import authors from '../../../content/authors.json';
import Router from 'next/router';

export interface ArticleThumbnailProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  author: string;
  publishDate: Date;
  url: string;
}

const articleVariants = {
  whileHover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

export const ArticleThumbnail = (article: ArticleThumbnailProps) => {
  const author = authors.find((author) => author.username === article.author);
  const { title, description, category, imageUrl, publishDate, url } = article;

  const onClick = () => Router.push(`${process.env.ASSET_PREFIX}${url}`);

  return (
    <StyledArticleThumbnail
      variants={articleVariants}
      whileHover="whileHover"
      whileTap="whileTap"
      className="article-thumbnail"
      onClick={onClick}
    >
      <ThumbnailImage
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
        <div className="category">{category}</div>
      </ThumbnailImage>
      <ThumbnailContent>
        <h3 className="article-title">{title}</h3>
        <div className="article-date">{publishDate.toDateString()}</div>
        <p className="article-description">{description}</p>
        <ThumbnailFooter>
          <Author {...author} />
        </ThumbnailFooter>
      </ThumbnailContent>
    </StyledArticleThumbnail>
  );
};
