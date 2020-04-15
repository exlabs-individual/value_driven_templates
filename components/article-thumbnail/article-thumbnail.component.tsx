import React from 'react';
import {
  StyledArticleThumbnail,
  ThumbnailImage,
  ThumbnailContent,
  ThumbnailFooter,
  ThumbnailButton,
} from './article-thumbnail.styles';
import { Author } from '../author/author.component';
import Link from 'next/link';

export interface ArticleThumbnailProps {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  publishDate: Date;
  authorImgUrl: string;
}

export const ArticleThumbnail = ({
  title,
  description,
  category,
  publishDate,
  imageUrl,
  authorImgUrl,
}: ArticleThumbnailProps) => {
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
          <Author imageUrl={authorImgUrl} />
          <Link href="#">
            <ThumbnailButton>See details</ThumbnailButton>
          </Link>
        </ThumbnailFooter>
      </ThumbnailContent>
    </StyledArticleThumbnail>
  );
};
