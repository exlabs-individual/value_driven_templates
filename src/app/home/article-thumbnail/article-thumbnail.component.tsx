import React from 'react';
import {
  StyledArticleThumbnail,
  ThumbnailImage,
  ThumbnailContent,
  ThumbnailFooter,
  ThumbnailButton,
} from './article-thumbnail.styles';
import Link from 'next/link';
import { Author } from '../../../ui/author/author.component';
import authors from '../../../content/authors.json';

export interface ArticleThumbnailProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  author: string;
  publishDate: Date;
  url: string;
}

export const ArticleThumbnail = (article: ArticleThumbnailProps) => {
  const author = authors.find((author) => author.username === article.author);
  const { title, description, category, imageUrl, publishDate, url } = article;

  return (
    <StyledArticleThumbnail className="article-thumbnail">
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
          <Link href={url}>
            <ThumbnailButton href={url}>See details</ThumbnailButton>
          </Link>
        </ThumbnailFooter>
      </ThumbnailContent>
    </StyledArticleThumbnail>
  );
};
