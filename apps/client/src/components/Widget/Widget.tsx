import * as React from 'react';

import * as S from './Widget.styles';

type WidgetProps = {
  readonly title?: string; // TODO ?
  readonly children: React.ReactNode;
};

const Widget = ({ title, children }: WidgetProps) => (
  <S.Wrapper>
    <S.Header>
      <S.Title>{title}</S.Title>
    </S.Header>

    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Widget;
