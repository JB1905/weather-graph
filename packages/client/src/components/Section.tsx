import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly title: string;
}

const SectionWrapper = styled.section`
  width: 100%;
  /* margin: 20px 0 0; */
  /* min-height: 360px; */
  /* width: calc(50% - 40px); */
  border-top: 1px solid #fff4;
  overflow: hidden;
  max-width: 650px;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  padding: 0 20px;
`;

const SectionContent = styled.div`
  /* border-radius: 20px; */
  /* background: #fff3; */
  /* padding: 20px; */
`;

const Section: React.FC<Props> = ({ children, title }) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>

    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);

export default Section;
