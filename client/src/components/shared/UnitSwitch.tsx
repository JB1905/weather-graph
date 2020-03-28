import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  padding: 12px 0;
`;

const Input = styled.div`
  padding: 7px 0;

  input {
    display: none;

    & + label {
      font-size: 1.8rem;
      width: 24px;
      height: 20px;
    }

    &:not(:checked) + label {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

const UnitSwitch = () => {
  const unit = useSelector((state: any) => state.settings.unit);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Input>
        <input
          type="radio"
          name="unit"
          checked={unit === 'C'}
          onChange={() => dispatch({ type: 'SET_UNIT', payload: 'C' })}
          id="celsius"
        />

        <label htmlFor="celsius">ºC</label>
      </Input>

      <Input>
        <input
          type="radio"
          name="unit"
          checked={unit === 'F'}
          onChange={() => dispatch({ type: 'SET_UNIT', payload: 'F' })}
          id="fahrenheit"
        />

        <label htmlFor="fahrenheit">ºF</label>
      </Input>
    </Wrapper>
  );
};

export default UnitSwitch;
