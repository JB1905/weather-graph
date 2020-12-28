import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './Condition.styles';

const Condition = memo<any>(
  ({
    icon,
    iconRotate, // TODO rename
    children,
  }: any) => {
    console.log(iconRotate);

    return (
      <S.Condition iconRotate={iconRotate}>
        {children}

        <FontAwesomeIcon icon={icon} />
      </S.Condition>
    );
  }
);

export default Condition;
