import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Author } from '../../ui/author/author.component';
import {
  StyledArticle,
  StyledHeader,
  InformationContainer,
  StyledContent,
} from './article.styles';
import { Image } from '../../ui/md-components/image/image.component';

interface ArticleProps {
  title: string;
  imageUrl: string;
  publishDate: Date;
  content: string;
}

export const Article = ({
  title,
  imageUrl,
  publishDate,
  content,
}: ArticleProps) => {
  return (
    <StyledArticle className="article">
      <StyledHeader style={{ backgroundImage: `url("${imageUrl}")` }}>
        <p className="category">Development</p>
        <h2 className="title">{title}</h2>
        <InformationContainer>
          <Author img="" name="By John Doe" />
          <p className="publish-date">{new Date().toDateString()}</p>
        </InformationContainer>
      </StyledHeader>
      <StyledContent>
        <ReactMarkdown
          source={content}
          renderers={{
            image: Image,
          }}
        />
      </StyledContent>
    </StyledArticle>
  );
};
