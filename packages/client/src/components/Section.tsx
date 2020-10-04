import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  /* margin: 20px 0 0; */
  /* min-height: 360px; */
  /* width: calc(50% - 40px); */
  border-top: 1px solid #fff4;
  overflow: hidden;
  max-width: 650px;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  padding: 14px 20px;
`;

const Content = styled.div`
  /* border-radius: 20px; */
  /* background: #fff3; */
  /* padding: 20px; */
`;

interface Props {
  readonly children: React.ReactNode;
  readonly title: string;
}

const Section = ({ children, title }: Props) => (
  <Wrapper>
    <Title>{title}</Title>

    <Content>{children}</Content>
  </Wrapper>
);

export default Section;
