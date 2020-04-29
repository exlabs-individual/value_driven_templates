import React from 'react';
import { HowToContributeHeader } from './header/how-to-contribute-header.component';
import { StyledContainer } from './how-to-contribute-container.styles';
import { InformationSection } from './information-section/information-section.component';

export const HowToContributeContainer = () => {
  return (
    <>
      <HowToContributeHeader />
      <StyledContainer>
        <InformationSection
          id="how-to-contribute-content"
          title="Create the content"
          description="Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step."
          image="workspace"
          sectionNumber={1}
        />
        <InformationSection
          title="Add article metadata"
          description="Go to src/content/articles.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field."
          image="content"
          sectionNumber={2}
        />
        <InformationSection
          title="Describe yourself"
          description="If it is Your first time adding content, please go to src/content/authors.json and add a new entry without Your username used in article metadata, Your full name, and URL to Your avatar image."
          image="author"
          sectionNumber={3}
        />
        <InformationSection
          title="Pull Request"
          description="That's it! Well done, now You can create a new Pull Request and wait for approval!"
          image="approve"
          sectionNumber={4}
        />
      </StyledContainer>
    </>
  );
};
