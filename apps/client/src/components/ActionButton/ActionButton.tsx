import { memo, ButtonHTMLAttributes } from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import * as S from './ActionButton.styles';

type ActionButtonIcon = Pick<FontAwesomeIconProps, 'icon'>;

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton = memo<ActionButtonIcon & ActionButtonProps>(
  // todo types
  ({ icon, ...props }) => (
    <S.Wrapper {...props}>
      <FontAwesomeIcon icon={icon} />
    </S.Wrapper>
  )
);

export default ActionButton;
