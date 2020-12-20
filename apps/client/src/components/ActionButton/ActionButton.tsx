import { memo, ButtonHTMLAttributes } from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import * as S from './ActionButton.styles';

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ActionButton = memo<
  Pick<FontAwesomeIconProps, 'icon'> & ActionButtonProps
>(({ icon, ...props }) => (
  <S.Wrapper {...props}>
    <FontAwesomeIcon icon={icon} />
  </S.Wrapper>
));

export default ActionButton;
