import { useState } from 'react';
import { useHistory } from 'react-router';

export const useSearch = () => {
  const history = useHistory();

  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const submit = (key: string) => {
    if (key === 'Enter') {
      history.push(`/city/${search}`);
    }
  };

  return {
    search,
    setSearch,
    isSearch,
    setIsSearch,
    submit,
  };
};
