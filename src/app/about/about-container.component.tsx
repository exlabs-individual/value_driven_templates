import React from 'react';
import { Section } from './section/section.component';
import { StyledAbout, ContributionText } from './about-container.styles';
import { AppRoute } from '../../routing/app-routes';
import Link from 'next/link';
import { AboutHeader } from './header/about-header.component';

export const AboutContainer = () => {
  return (
    <>
      <AboutHeader />
      <StyledAbout>
        <Section
          title="About Value Driven Engineering"
          image="about"
          id="about-content"
        >
          In digital-first world, effectiveness in delivering software
          initiatives is what makes or brakes organisations. Yet many IT teams
          suffer from lack of true alignment with business goals, which results
          in software becoming a cost generator instead of an assets. There’s
          now a handful number of resources and tools helping engineers improve
          software delivery performance, though most of them don’t fill the gap
          when it comes to match IT strategy with delivery.
        </Section>
        <Section textPosition="left" title="Our values" image="values">
          At Exlabs, we believe that the true alignment between management and
          engineers can only be achieved by helping both sides speak the same
          language. That’s why we’ve came up with a concept of Value Driven
          Engineering which manifests a need to focus on results rather than
          actions. In days of ubiquitous dependency on software, results are
          more multi-dimensional than ever before. It’s not longer possible to
          measure business benefit simply by direct ROI from implemented change.
          Your enterprise’s software ecosystem is most likely very complex and
          you need a great roadmap to navigate it. In order to help
          organisations reduce waste and guess work, we’ve created a curated
          list of resources and frameworks we use in our day-to-day practice.
        </Section>

        <Section textPosition="right" title="Sharing" image="sharing">
          "We believe the knowledge we share here will help IT groups improve
          their planning, delivery and maintenance processes, which would result
          in delivering software assets better suited for unique business
          needs."
          <ContributionText>
            Interested in contribute?
            <Link
              href={`${process.env.ASSET_PREFIX}${AppRoute.HOW_TO_CONTRIBUTE}`}
            >
              <a
                href={`${process.env.ASSET_PREFIX}${AppRoute.HOW_TO_CONTRIBUTE}`}
              >
                Learn more here.
              </a>
            </Link>
          </ContributionText>
        </Section>
      </StyledAbout>
    </>
  );
};
