import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly icon: IconProp;
}

const Wrapper = styled.button`
  cursor: pointer;
  margin-left: 10px;
  font-size: 1.5rem;
  min-width: 34px;
  height: 34px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 0;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const ActionButton: React.FC<Props> = ({ icon, children, ...props }) => (
  // <Wrapper {...props}>
  <Wrapper>
    <FontAwesomeIcon icon={icon} />
  </Wrapper>
);

export default ActionButton;
