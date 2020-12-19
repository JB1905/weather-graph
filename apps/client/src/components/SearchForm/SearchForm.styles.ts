import styled from 'styled-components';

import ActionButton from 'components/ActionButton';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  max-width: 300px; // TODO theme?
  width: 100%; // TODO theme
  margin: 0 10px; // TODO theme
`;

export const SearchField = styled.input`
  flex: 1;
  border: 0;
  background: none;
  overflow: hidden;
  text-transform: inherit;
  -webkit-appearance: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.font.size.default};
  color: ${({ theme }) => theme.colors.text};
  padding-left: 10px; // TODO theme
  padding-right: ${({ theme }) => theme.size.actionButton};
  height: ${({ theme }) => theme.size.actionButton};

  &::placeholder {
    color: #fff9;
  }
`;

export const SearchButton = styled(ActionButton)`
  position: absolute;
  right: 0;
`;
