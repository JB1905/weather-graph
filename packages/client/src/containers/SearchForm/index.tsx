import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import ActionButton from 'components/ActionButton';

import { SearchWrapper, SearchField } from './SearchForm.styled';

interface Props {
  onSubmit(query: string): void;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query !== '') onSubmit(query);
  };

  return (
    <SearchWrapper>
      <SearchField
        type="search"
        placeholder="City name"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        aria-label="Search"
      />

      <ActionButton
        icon={faSearch}
        disabled={query === ''}
        onClick={handleSubmit}
        aria-label="Submit Search"
      />
    </SearchWrapper>
  );
};

export default SearchForm;
