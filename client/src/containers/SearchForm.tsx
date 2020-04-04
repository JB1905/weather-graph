import React, { useState } from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import ActionButton from '../components/ActionButton';

interface Props {
  onSubmit(query: string): void;
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
`;

const SearchField = styled.input`
  flex: 1;
  border: 0;
  // font-size: 1.8rem;
  background: none;
  border-radius: 2px;
  text-transform: inherit;
  -webkit-appearance: none;
  font-family: inherit;
  padding: 0 8px;
  // margin: 7px 0;
  color: #fff;

  &::placeholder {
    color: #fff9;
  }
`;

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query !== '') {
      onSubmit(query);
    }
  };

  return (
    <SearchWrapper>
      <SearchField
        type="search"
        placeholder="City name"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />

      <ActionButton
        icon={faSearch}
        disabled={query === ''}
        onClick={handleSubmit}
      />
    </SearchWrapper>
  );
};

export default SearchForm;
