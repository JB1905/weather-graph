import styled from 'styled-components';

const Search = styled.input<{ visible?: boolean }>`
  border: 0;
  font-size: 1.8rem;
  background: none;
  border-radius: 2px;
  text-transform: inherit;
  -webkit-appearance: none;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  font-family: inherit;
  padding: 8px;
  margin: 7px 0;
  color: #fff;

  &::placeholder {
    color: #fff9;
  }
`;

export default Search;
