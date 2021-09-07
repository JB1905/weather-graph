import styled from 'styled-components';

import ActionButton from 'components/ActionButton';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  max-width: 300px; /* TODO */
  width: 100%;
  margin: 0 10px; /* TODO */
`;

export const Field = styled.input`
  flex: 1;
  border: 0;
  background: none;
  overflow: hidden;
  text-transform: inherit;
  -webkit-appearance: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.size.default};
  color: ${({ theme }) => theme.colors.text};
  padding-left: 10px; /* TODO */
  padding-right: ${({ theme }) => theme.size.actionButton};
  height: ${({ theme }) => theme.size.actionButton};

  &::placeholder {
    color: #fff9; /* TODO */
  }
`;

export const Button = styled(ActionButton)`
  position: absolute;
  right: 0;
`;
