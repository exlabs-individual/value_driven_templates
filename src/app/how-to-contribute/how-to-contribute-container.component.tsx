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
          title="Create your workspace"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        libero saepe quisquam porro sunt non nisi dolores voluptatum soluta
        aspernatur, nam et quo, corrupti, assumenda quia. Unde aperiam veniam
        illum. Corporis consequuntur molestias voluptates ratione recusandae
        dolores voluptatum illo, mollitia consequatur! Doloremque neque a aut
        doloribus expedita odit magnam assumenda laudantium, consequuntur
        molestias delectus sequi suscipit vitae sunt! Laboriosam quisquam quam
        est voluptatem placeat sunt repellat non nostrum, quidem id. Vitae
        veritatis minus at dolore, dolor minima eaque. Omnis, quasi libero.
        Placeat, ad tempora quae vel distinctio quia ratione quibusdam
        similique doloremque perferendis facere, praesentium voluptatibus hic
        vitae! Cupiditate, consequatur."
          image="workspace"
          sectionNumber={1}
        />
        <InformationSection
          title="Create your workspace"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        libero saepe quisquam porro sunt non nisi dolores voluptatum soluta
        aspernatur, nam et quo, corrupti, assumenda quia. Unde aperiam veniam
        illum. Corporis consequuntur molestias voluptates ratione recusandae
        dolores voluptatum illo, mollitia consequatur! Doloremque neque a aut
        doloribus expedita odit magnam assumenda laudantium, consequuntur
        molestias delectus sequi suscipit vitae sunt! Laboriosam quisquam quam
        est voluptatem placeat sunt repellat non nostrum, quidem id. Vitae
        veritatis minus at dolore, dolor minima eaque. Omnis, quasi libero.
        Placeat, ad tempora quae vel distinctio quia ratione quibusdam
        similique doloremque perferendis facere, praesentium voluptatibus hic
        vitae! Cupiditate, consequatur."
          image="content"
          sectionNumber={2}
        />
        <InformationSection
          title="Create your workspace"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        libero saepe quisquam porro sunt non nisi dolores voluptatum soluta
        aspernatur, nam et quo, corrupti, assumenda quia. Unde aperiam veniam
        illum. Corporis consequuntur molestias voluptates ratione recusandae
        dolores voluptatum illo, mollitia consequatur! Doloremque neque a aut
        doloribus expedita odit magnam assumenda laudantium, consequuntur
        molestias delectus sequi suscipit vitae sunt! Laboriosam quisquam quam
        est voluptatem placeat sunt repellat non nostrum, quidem id. Vitae
        veritatis minus at dolore, dolor minima eaque. Omnis, quasi libero.
        Placeat, ad tempora quae vel distinctio quia ratione quibusdam
        similique doloremque perferendis facere, praesentium voluptatibus hic
        vitae! Cupiditate, consequatur."
          image="content"
          sectionNumber={3}
        />
      </StyledContainer>
    </>
  );
};
