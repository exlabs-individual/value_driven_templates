import React from 'react';
import {
  StyledArticle,
  InformationText,
  LearnMoreLink,
} from './article-aside.styles';

export const ArticleAside = () => {
  return (
    <StyledArticle
      className="article-aside"
      style={{
        backgroundImage: `url("${process.env.ASSET_PREFIX}/exlabs-photo.jpg")`,
      }}
    >
      <InformationText>Want to know more about us?</InformationText>
      <LearnMoreLink
        href="http://exlabs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out our page!
      </LearnMoreLink>
    </StyledArticle>
  );
};
