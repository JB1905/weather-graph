import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Input = styled.input`
  display: none;
`;

export default () => {
  const unit = useSelector((state: any) => state.settings.unit);

  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <Input
          type="radio"
          name="unit"
          checked={unit === 'C'}
          onChange={() => dispatch({ type: 'SET_UNIT', payload: 'C' })}
        />
        C
      </label>

      <label>
        <Input
          type="radio"
          name="unit"
          checked={unit === 'F'}
          onChange={() => dispatch({ type: 'SET_UNIT', payload: 'F' })}
        />
        F
      </label>
    </div>
  );
};
