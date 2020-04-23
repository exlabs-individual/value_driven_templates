import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  StyledArticle,
  StyledHeader,
  InformationContainer,
  ContentSection,
  StyledFooter,
  PaddingContainer,
} from './article.styles';
import { Author } from '../../ui/author/author.component';

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
  // TODO: Improve styles
  return (
    <StyledArticle className="article">
      <StyledHeader
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
        <h2 className="article-title">{title}</h2>
      </StyledHeader>
      <PaddingContainer>
        <InformationContainer>
          <Author
            img="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            name="John Doe"
          />
          <p className="publish-date">{publishDate.toTimeString()}</p>
        </InformationContainer>
        <ContentSection>
          <ReactMarkdown source={content} />
        </ContentSection>
        <StyledFooter>
          <Author
            img="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            name="John Doe"
          />
        </StyledFooter>
      </PaddingContainer>
    </StyledArticle>
  );
};
