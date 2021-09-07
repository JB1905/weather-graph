import { useCallback, useMemo, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import * as S from './SearchForm.styles';

interface SearchFormProps {
  onSubmit: (query: string) => void;
};

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = useCallback(() => {
    if (query !== '') onSubmit(query);
  }, [onSubmit, query]);

  const isSubmitDisabled =  useMemo(() => query === '', [query])

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
        disabled={isSubmitDisabled}
        onClick={handleSubmit}
        aria-label="Submit Search"
      />
    </S.Wrapper>
  );
};

export default SearchForm;
