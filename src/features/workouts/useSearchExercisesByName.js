import { getExercisesByName } from '../../services/exercisesApi';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

export function useSearchExercisesByName({ limit } = { limit: null }) {
  const [query, setQuery] = useState('');
  const { debouncedValue } = useDebounce(query);

  const {
    data,
    isLoading: isSearching,
    error,
  } = useQuery({
    queryFn: () =>
      debouncedValue.length < Number(import.meta.env.VITE_MIN_INPUT_LENGTH)
        ? null
        : getExercisesByName({ query: debouncedValue, limit }),
    queryKey: ['exercise', debouncedValue],
    retry: false,
  });

  return { data: limit ? data?.[0] : data, isSearching, error, setQuery };
}
