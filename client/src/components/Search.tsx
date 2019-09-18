import styled from 'styled-components';

const Search = styled.input<{ visible?: boolean }>`
  border: 0;
  font-size: 18px;
  background: none;
  border-radius: 2px;
  text-transform: inherit;
  -webkit-appearance: none;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  border-bottom: 3px solid #ffffff;
  border-left: 3px solid #ffffff;
  max-width: calc(100% - 110px);
  font-family: inherit;
  padding: 8px 20px;
  margin: 10px 0;
  color: #fff;

  &::placeholder {
    color: #fff9;
  }
`;

export default Search;
