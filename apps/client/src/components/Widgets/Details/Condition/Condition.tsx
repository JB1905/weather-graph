import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './Condition.styles';

const Condition = ({
  icon,
  iconRotate, // TODO rename
  children,
}: any) => {
  return (
    <S.Condition iconRotate={iconRotate}>
      {children}

      <FontAwesomeIcon icon={icon} />
    </S.Condition>
  );
};

export default Condition;
