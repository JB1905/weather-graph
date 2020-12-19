import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './ActionButton.styles';

// TODO types
const ActionButton = ({ icon, ...props }: any) => (
  <S.Wrapper {...props}>
    <FontAwesomeIcon icon={icon} />
  </S.Wrapper>
);

export default ActionButton;
