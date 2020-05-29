import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
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

  &::placeholder {
    color: #fff9;
  }
`;
