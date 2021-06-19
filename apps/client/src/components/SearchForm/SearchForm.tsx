import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import * as S from './SearchForm.styles';

type SearchFormProps = {
  onSubmit: (query: string) => void;
};

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [query, setQuery] = useState('');

  // todo useCallback
  const handleSubmit = () => {
    if (query !== '') onSubmit(query);
  };

  return (
    <S.Wrapper>
      <S.Field
        type="search"
        placeholder="City name"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        aria-label="Search"
      />

      <S.Button
        icon={faSearch}
        disabled={query === ''}
        onClick={handleSubmit}
        aria-label="Submit Search"
      />
    </S.Wrapper>
  );
};

export default SearchForm;
