import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: ${({ theme }) => theme.size.full}; // TODO remove var
  max-width: ${({ theme }) => theme.size.maxContainerSize};
  overflow: hidden;
`;

const Header = styled.header`
  /* padding: 14px 20px; */
`;

const Title = styled.h3`
  font-size: 1.4rem;
`;

const Content = styled.div`
  /* border-radius: 20px; */
  /* background: #fff3; */
  /* padding: 20px; */

  /* display: flex;
  align-items: center;
  justify-content:center;
  min-height: 200px; */
`;

type WidgetProps = {
  readonly title?: string; // ?
  readonly children: React.ReactNode;
};

const Widget = ({ title, children }: WidgetProps) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
    </Header>

    <Content>{children}</Content>
  </Wrapper>
);

export default Widget;
