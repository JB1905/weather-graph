import { HTMLProps } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// interface Props extends HTMLProps<HTMLButtonElement> {
//   readonly icon: IconProp;
// }

// TODO
const Wrapper = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  min-width: ${({ theme }) => theme.size.actionButton};
  height: ${({ theme }) => theme.size.actionButton};
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: 0;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

// TODO type
const ActionButton = ({ icon, ...props }: any) => (
  <Wrapper {...props}>
    <FontAwesomeIcon icon={icon} />
  </Wrapper>
);

export default ActionButton;
