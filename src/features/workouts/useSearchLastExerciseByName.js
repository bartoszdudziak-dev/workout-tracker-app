import { getLastExerciseByName } from '../../services/exercisesApi';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

export function useSearchLastExerciseByName() {
  const [query, setQuery] = useState('');
  const { debouncedValue } = useDebounce(query);

  const {
    data,
    isFetching: isSearching,
    error,
  } = useQuery({
    queryFn: () =>
      debouncedValue.length < Number(import.meta.env.VITE_MIN_INPUT_LENGTH)
        ? null
        : getLastExerciseByName(debouncedValue),
    queryKey: ['exercise', debouncedValue],
    retry: false,
  });

  return { data: data?.[0], isSearching, error, setQuery };
}
