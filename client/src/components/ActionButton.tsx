import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
}

const Wrapper = styled.button`
  background: transparent;
  margin-left: 10px;
  font-size: 1.5rem;
  width: 34px;
  height: 34px;
  cursor: pointer;
  color: #fff;
  border: 0;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const ActionButton: React.FC<Props | any> = ({ icon, children, ...props }) => (
  <Wrapper {...props}>
    <FontAwesomeIcon icon={icon} />
  </Wrapper>
);

export default ActionButton;
