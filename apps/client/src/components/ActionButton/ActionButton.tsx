import { HTMLProps } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './ActionButton.styles';

// TODO HTMLProps<HTMLButtonElement>
type ActionButtonProps = {
  readonly icon: IconProp;
};

const ActionButton = ({ icon, ...props }: any) => (
  <S.Wrapper {...props}>
    <FontAwesomeIcon icon={icon} />
  </S.Wrapper>
);

export default ActionButton;
